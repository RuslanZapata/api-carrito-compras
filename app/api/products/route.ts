import { ApiResponse, Product } from '@/app/types';
import { NextResponse } from 'next/server';

const products: Product[] = [
  { id: 1, name: "Producto 1", price: 100 },
  { id: 2, name: "Producto 2", price: 200 },
  { id: 3, name: "Producto 3", price: 150 },
  { id: 4, name: "Producto 4", price: 180 },
  { id: 5, name: "Producto 5", price: 120 },
  { id: 6, name: "Producto 6", price: 250 },

];

export async function GET(): Promise<NextResponse<ApiResponse<Product[]>>> {
  try {
    return NextResponse.json({
      success: true,
      data: products,
      message: 'Productos obtenidos exitosamente'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: [],
      message: 'Error al obtener productos'
    }, { status: 500 });
  }
}