import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  with_gift_pack: boolean;
  quantity: number;
  created_at: string;
  product?: {
    name: string;
    price_without_gift: number;
    price_with_gift: number;
  };
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        await fetchCart();
      } else {
        setCart([]);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  async function fetchCart() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCart(data || []);
    } finally {
      setLoading(false);
    }
  }

  async function addToCart(productId: string, withGiftPack: boolean, quantity: number = 1) {
    try {
      const { data: existing } = await supabase
        .from('cart_items')
        .select('id, quantity')
        .eq('product_id', productId)
        .eq('with_gift_pack', withGiftPack)
        .maybeSingle();

      if (existing) {
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existing.quantity + quantity })
          .eq('id', existing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('cart_items')
          .insert({
            product_id: productId,
            with_gift_pack: withGiftPack,
            quantity
          });
        if (error) throw error;
      }

      await fetchCart();
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  }

  async function removeFromCart(cartItemId: string) {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', cartItemId);

      if (error) throw error;
      await fetchCart();
    } catch (err) {
      console.error('Failed to remove from cart:', err);
    }
  }

  async function updateQuantity(cartItemId: string, quantity: number) {
    try {
      if (quantity <= 0) {
        await removeFromCart(cartItemId);
      } else {
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity })
          .eq('id', cartItemId);

        if (error) throw error;
        await fetchCart();
      }
    } catch (err) {
      console.error('Failed to update quantity:', err);
    }
  }

  return {
    cart,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity
  };
}
