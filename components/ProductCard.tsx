import { Plus } from "lucide-react";
import { Product } from "@/types";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
  loading: boolean;
}

export function ProductCard({
  product,
  onAddToCart,
  loading,
}: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{product.name}</span>
          <Badge variant="secondary">ID: {product.id}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-primary">
          ${product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => onAddToCart(product.id)}
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Agregando...
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Agregar al Carrito
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
