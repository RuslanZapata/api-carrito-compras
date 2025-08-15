"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Calculator } from "lucide-react";
import { Product } from "@/types";
import { toast } from "sonner";
import AvailableProducts from "./AvailableProducts";
import BudgetInput from "./BudgetInput";
import OptimizationResultView from "./OptimizationResultView";
import BudgetOptimizerSkeleton from "./BudgetOptimizerSkeleton";

interface OptimizationResult {
  products: Product[];
  totalValue: number;
  budget: number;
}

export default function BudgetOptimizer() {
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [budget, setBudget] = useState<string>("150");
  const [optimization, setOptimization] = useState<OptimizationResult | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    fetchAvailableProducts();
  }, []);

  const fetchAvailableProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      if (data.success) {
        setAvailableProducts(data.data);
      } else {
        toast.error(data.message || "Error al cargar productos");
      }
    } catch (error) {
      toast.error("Error de conexión al cargar productos");
    } finally {
      setLoadingProducts(false);
    }
  };

  const optimizeBudget = async () => {
    const budgetNumber = Number(budget);
    if (isNaN(budgetNumber) || budgetNumber <= 0) {
      toast.error("Por favor ingresa un presupuesto válido");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/budget-optimizer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ budget: budgetNumber }),
      });
      const data = await response.json();
      if (data.success) {
        setOptimization(data.data);
        toast.success(
          `Optimización completada: ${data.data.products.length} productos seleccionados`
        );
      } else {
        toast.error(data.message || "Error al optimizar presupuesto");
      }
    } catch (error) {
      toast.error("Error de conexión al optimizar presupuesto");
    } finally {
      setLoading(false);
    }
  };

  if (loadingProducts) {
    return <BudgetOptimizerSkeleton />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-5 w-5" />
          Optimizador de Presupuesto
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <AvailableProducts products={availableProducts} />
        <BudgetInput
          budget={budget}
          setBudget={setBudget}
          loading={loading}
          onOptimize={optimizeBudget}
        />
        <OptimizationResultView optimization={optimization} />
      </CardContent>
    </Card>
  );
}
