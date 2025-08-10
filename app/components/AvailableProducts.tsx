import { Badge } from '../ui/badge';
import { Target } from 'lucide-react';
import { Product } from '../types';

interface AvailableProductsProps {
  products: Product[];
}

export default function AvailableProducts({ products }: AvailableProductsProps) {
  return (
    <div>
      <h4 className="font-semibold mb-3 flex items-center">
        <Target className="mr-2 h-4 w-4" />
        Productos Disponibles
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-2 border rounded">
            <span className="text-sm">{product.name}</span>
            <Badge variant="outline">${product.price}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}