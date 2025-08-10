'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ShoppingCart } from 'lucide-react';
import { Cart as CartType } from '../types';
import { toast } from 'sonner';
import { CartItems } from './CartItems';
import { CartSkeleton } from './CartSkeleton';

interface CartProps {
  refreshTrigger?: number;
}

export default function Cart({ refreshTrigger }: CartProps) {
  const [cart, setCart] = useState<CartType>({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    fetchCart();
  }, [refreshTrigger]);

  const fetchCart = async () => {
    try {
      const response = await fetch('/api/cart');
      const data = await response.json();
      if (data.success) {
        setCart(data.data);
      } else {
        toast.error(data.message || 'Error al cargar el carrito');
      }
    } catch (error) {
      toast.error('Error de conexión al cargar el carrito');
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setClearing(true);
    try {
      const response = await fetch('/api/cart', {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        setCart(data.data);
        toast.success('Carrito vaciado exitosamente');
      } else {
        toast.error(data.message || 'Error al vaciar el carrito');
      }
    } catch (error) {
      toast.error('Error de conexión al vaciar el carrito');
    } finally {
      setClearing(false);
    }
  };

  if (loading) {
    return <CartSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Carrito de Compras
          </div>
          <Badge variant="outline">
            {cart.items.reduce((sum, item) => sum + item.quantity, 0)} productos
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CartItems
          items={cart.items}
          total={cart.total}
          clearing={clearing}
          onClearCart={clearCart}
        />
      </CardContent>
    </Card>
  );
}