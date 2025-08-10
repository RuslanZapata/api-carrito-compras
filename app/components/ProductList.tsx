'use client';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ProductListSkeleton } from './ProductListSkeleton';

interface ProductListProps {
  onProductAdded?: () => void;
}

export function ProductList({ onProductAdded }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState<number | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
      } else {
        toast.error(data.message || 'Error al cargar productos');
      }
    } catch (error) {
      toast.error('Error de conexión al cargar productos');
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return <ProductListSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          loading={addingToCart === product.id}
        />
      ))}
    </div>
  );
}