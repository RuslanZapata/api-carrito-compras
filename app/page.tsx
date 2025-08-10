"use client"
import { Package } from "lucide-react";
import Header from "./components/Header";
import MainTab from "./components/MainTab";
import { Tabs, TabsContent } from "./ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { ProductList } from "./components/ProductList";

export default function Home() {
  const [cartRefreshTrigger, setCartRefreshTrigger] = useState(0);

  const handleProductAdded = () => {
    setCartRefreshTrigger((prev) => prev + 1);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <Header />
        <Tabs defaultValue="products" className="space-y-8">
          {/* Tabs principal */}
          <MainTab />
          {/* Lista de productos */}
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
        </Tabs>
      </div>
    </div>
  );
}
