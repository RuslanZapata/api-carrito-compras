import { NextRequest, NextResponse } from 'next/server';
import { Product, ApiResponse } from '../../types';
import { findBestCombination } from '@/app/lib/budgetOptimizer';

// Productos para optimización de presupuesto
const optimizerProducts: Product[] = [
  { id: 1, name: "Producto 1", price: 10 },
  { id: 2, name: "Producto 2", price: 20 },
  { id: 3, name: "Producto 3", price: 15 },
  { id: 4, name: "Producto 4", price: 18 },
  { id: 5, name: "Producto 5", price: 12 },
  { id: 6, name: "Producto 6", price: 25 },
];

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<{ products: Product[]; totalValue: number; budget: number }>>> {
  try {
    const body = await request.json();
    const { budget } = body;
    
    if (!budget || typeof budget !== 'number' || budget <= 0) {
      return NextResponse.json({
        success: false,
        data: { products: [], totalValue: 0, budget: 0 },
        message: 'Presupuesto debe ser un número válido mayor a 0'
      }, { status: 400 });
    }
    
    const bestCombination = findBestCombination(optimizerProducts, Number(budget));
    const totalValue = bestCombination.reduce((sum, product) => sum + product.price, 0);
    
    return NextResponse.json({
      success: true,
      data: {
        products: bestCombination,
        totalValue,
        budget
      },
      message: 'Optimización completada exitosamente'
    });
  } catch (error) {
    console.error('Error en POST /api/budget-optimizer:', error);
    return NextResponse.json({
      success: false,
      data: { products: [], totalValue: 0, budget: 0 },
      message: `Error al optimizar presupuesto: ${error instanceof Error ? error.message : 'Error desconocido'}`
    }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse<ApiResponse<Product[]>>> {
  try {
    return NextResponse.json({
      success: true,
      data: optimizerProducts,
      message: 'Productos para optimización obtenidos exitosamente'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: [],
      message: 'Error al obtener productos para optimización'
    }, { status: 500 });
  }
}