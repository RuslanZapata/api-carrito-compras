import { ApiResponse, Product } from '@/app/types';
import { NextResponse } from 'next/server';

const products: Product[] = [
  { id: 1, name: "Producto 1", price: 10 },
  { id: 2, name: "Producto 2", price: 20 },
  { id: 3, name: "Producto 3", price: 15 },
  { id: 4, name: "Producto 4", price: 18 },
  { id: 5, name: "Producto 5", price: 12 },
  { id: 6, name: "Producto 6", price: 25 },
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