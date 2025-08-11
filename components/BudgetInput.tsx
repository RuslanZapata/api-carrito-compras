import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Button } from "@/components/atoms/button";
import { DollarSign } from "lucide-react";

interface BudgetInputProps {
  budget: string;
  setBudget: (value: string) => void;
  loading: boolean;
  onOptimize: () => void;
}

export default function BudgetInput({
  budget,
  setBudget,
  loading,
  onOptimize,
}: BudgetInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="budget" className="flex items-center">
        <DollarSign className="mr-2 h-4 w-4" />
        Presupuesto Máximo
      </Label>
      <div className="flex gap-2">
        <Input
          id="budget"
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Ej: 150"
          className="flex-1"
        />
        <Button onClick={onOptimize} disabled={loading}>
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Calculando...
            </>
          ) : (
            "Optimizar"
          )}
        </Button>
      </div>
    </div>
  );
}
