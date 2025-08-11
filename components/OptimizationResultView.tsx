import { Badge } from "@/components/atoms/badge";
import { Separator } from "@/components/atoms/separator";
import { Product } from "@/types";

interface OptimizationResult {
  products: Product[];
  totalValue: number;
  budget: number;
}

interface OptimizationResultViewProps {
  optimization: OptimizationResult | null;
}

export default function OptimizationResultView({
  optimization,
}: OptimizationResultViewProps) {
  if (!optimization) return null;

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-green-50">
      <h4 className="font-semibold text-green-800">
        Mejor Combinación Encontrada
      </h4>
      <div className="space-y-2">
        {optimization.products.length === 0 ? (
          <p className="text-sm text-gray-600">
            No se encontraron productos que se ajusten al presupuesto
          </p>
        ) : (
          <>
            {optimization.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between"
              >
                <span className="text-sm">{product.name}</span>
                <Badge variant="secondary">${product.price}</Badge>
              </div>
            ))}
            <Separator />
            <div className="flex items-center justify-between font-semibold">
              <span>Total Optimizado:</span>
              <span className="text-green-600">
                ${optimization.totalValue} / ${optimization.budget}
              </span>
            </div>
            <div className="text-xs text-green-600">
              Ahorro: ${optimization.budget - optimization.totalValue}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
