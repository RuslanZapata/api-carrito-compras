import { NextRequest, NextResponse } from 'next/server';
import { getCart, addToCart, clearCart } from '../../lib/cart';
import { Product,ApiResponse , Cart } from '@/app/types';

// Lista de productos disponibles
const availableProducts: Product[] = [
  { id: 1, name: "Producto 1", price: 100 },
  { id: 2, name: "Producto 2", price: 200 },
  { id: 3, name: "Producto 3", price: 150 },
  { id: 4, name: "Producto 4", price: 180 },
  { id: 5, name: "Producto 5", price: 120 },
  { id: 6, name: "Producto 6", price: 250 },
];

export async function GET(): Promise<NextResponse<ApiResponse<Cart>>> {
  try {
    const cart = getCart();
    return NextResponse.json({
      success: true,
      data: cart,
      message: 'Carrito obtenido exitosamente'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: { items: [], total: 0 },
      message: 'Error al obtener el carrito'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<Cart>>> {
  try {
    const body = await request.json();
    const { productId } = body;
    
    if (!productId || typeof productId !== 'number') {
      return NextResponse.json({
        success: false,
        data: { items: [], total: 0 },
        message: 'ID del producto es requerido y debe ser un número'
      }, { status: 400 });
    }
    
    const product = availableProducts.find(p => p.id === Number(productId));
    
    if (!product) {
      return NextResponse.json({
        success: false,
        data: { items: [], total: 0 },
        message: 'Producto no encontrado'
      }, { status: 404 });
    }
    
    const updatedCart = addToCart(product);
    
    return NextResponse.json({
      success: true,
      data: updatedCart,
      message: 'Producto agregado al carrito exitosamente'
    });
  } catch (error) {
    console.error('Error en POST /api/cart:', error);
    return NextResponse.json({
      success: false,
      data: { items: [], total: 0 },
      message: `Error al agregar producto al carrito: ${error instanceof Error ? error.message : 'Error desconocido'}`
    }, { status: 500 });
  }
}

export async function DELETE(): Promise<NextResponse<ApiResponse<Cart>>> {
  try {
    const clearedCart = clearCart();
    return NextResponse.json({
      success: true,
      data: clearedCart,
      message: 'Carrito vaciado exitosamente'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: { items: [], total: 0 },
      message: 'Error al vaciar el carrito'
    }, { status: 500 });
  }
}