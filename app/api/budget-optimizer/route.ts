import { NextRequest, NextResponse } from "next/server";
import { Product, ApiResponse } from "@/types";
import { findBestCombination } from "@/utils/budgetOptimizer";
import { catalogProducts } from "@/utils/catalogProducts";

export async function POST(
  request: NextRequest
): Promise<
  NextResponse<
    ApiResponse<{ products: Product[]; totalValue: number; budget: number }>
  >
> {
  try {
    const body = await request.json();
    const { budget } = body;

    if (!budget || typeof budget !== "number" || budget <= 0) {
      return NextResponse.json(
        {
          success: false,
          data: { products: [], totalValue: 0, budget: 0 },
          message: "Presupuesto debe ser un número válido mayor a 0",
        },
        { status: 400 }
      );
    }

    const bestCombination = findBestCombination(
      catalogProducts,
      Number(budget)
    );
    const totalValue = bestCombination.reduce(
      (sum, product) => sum + product.price,
      0
    );

    return NextResponse.json({
      success: true,
      data: {
        products: bestCombination,
        totalValue,
        budget,
      },
      message: "Optimización completada exitosamente",
    });
  } catch (error) {
    console.error("Error en POST /api/budget-optimizer:", error);
    return NextResponse.json(
      {
        success: false,
        data: { products: [], totalValue: 0, budget: 0 },
        message: `Error al optimizar presupuesto: ${
          error instanceof Error ? error.message : "Error desconocido"
        }`,
      },
      { status: 500 }
    );
  }
}

