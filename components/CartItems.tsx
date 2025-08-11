import { Separator } from "@/components/atoms/separator";
import { Button } from "@/components/atoms/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { CartItem } from "@/types";

interface CartItemsProps {
  items: CartItem[];
  total: number;
  clearing: boolean;
  onClearCart: () => void;
}

export function CartItems({
  items,
  total,
  clearing,
  onClearCart,
}: CartItemsProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <ShoppingCart className="mx-auto h-12 w-12 mb-4 opacity-50" />
        <p>Tu carrito está vacío</p>
        <p className="text-sm">Agrega algunos productos para empezar</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item: CartItem) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-3 border rounded-lg"
        >
          <div className="flex-1">
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-sm text-gray-600">
              ${item.price.toLocaleString()} x {item.quantity}
            </p>
          </div>
          <div className="text-right">
            <p className="font-bold">
              ${(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        </div>
      ))}

      <Separator />

      <div className="flex items-center justify-between text-lg font-bold">
        <span>Total:</span>
        <span className="text-primary">${total.toLocaleString()}</span>
      </div>

      <Button
        variant="destructive"
        onClick={onClearCart}
        disabled={clearing}
        className="w-full"
      >
        {clearing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Vaciando...
          </>
        ) : (
          <>
            <Trash2 className="mr-2 h-4 w-4" />
            Vaciar Carrito
          </>
        )}
      </Button>
    </div>
  );
}
