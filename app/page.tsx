"use client";
import { Package } from "lucide-react";
import { TabsContent } from "./ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ProductList } from "./components/ProductList";
import { useCartRefresh } from "./context/CartRefreshContext";

export default function Home() {
  const cartRefreshContext = useCartRefresh();
  if (!cartRefreshContext) {
    // Puedes mostrar un mensaje de error, retornar null, o lanzar una excepción
    return null;
  }
  const { setCartRefreshTrigger } = cartRefreshContext;
  const handleProductAdded = () => {
    setCartRefreshTrigger((prev) => prev + 1);
  };
  {
    /* Lista de productos */
  }
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
