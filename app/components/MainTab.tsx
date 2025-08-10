import { Calculator, Package, ShoppingBag } from "lucide-react";
import { TabsList, TabsTrigger } from "../ui/tabs";

const MainTab = () => {
  return (
    <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
      <TabsTrigger value="products" className="flex items-center gap-2">
        <Package className="h-4 w-4" />
        <span className="hidden sm:inline">Productos</span>
      </TabsTrigger>
      <TabsTrigger value="cart" className="flex items-center gap-2">
        <ShoppingBag className="h-4 w-4" />
        <span className="hidden sm:inline">Carrito</span>
      </TabsTrigger>
      <TabsTrigger value="optimizer" className="flex items-center gap-2">
        <Calculator className="h-4 w-4" />
        <span className="hidden sm:inline">Optimizador</span>
      </TabsTrigger>
    </TabsList>
  );
};

export default MainTab;
