"use client";
import { Package } from "lucide-react";
import { TabsContent } from "@/components/atoms/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { ProductList } from "@/components/ProductList";
import { useCartRefresh } from "@/context/CartRefreshContext";

export default function Home() {
  const cartRefreshContext = useCartRefresh();
  if (!cartRefreshContext) {
    return null;
  }
  const { setCartRefreshTrigger } = cartRefreshContext;
  const handleProductAdded = () => {
    setCartRefreshTrigger((prev) => prev + 1);
  };

  return (
    <TabsContent value="products" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="mr-2 h-5 w-5" />
            Catálogo de Productos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductList onProductAdded={handleProductAdded} />
        </CardContent>
      </Card>
    </TabsContent>
  );
}
