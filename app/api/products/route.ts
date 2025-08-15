import { ApiResponse, Product } from "@/types";
import { catalogProducts } from "@/utils/catalogProducts";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<ApiResponse<Product[]>>> {
  try {
    return NextResponse.json({
      success: true,
      data: catalogProducts,
      message: "Productos obtenidos exitosamente",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: [],
        message: "Error al obtener productos",
      },
      { status: 500 }
    );
  }
}
