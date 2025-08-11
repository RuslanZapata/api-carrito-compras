import { bebasNeue } from "@/utils/fonts";

const Header = () => {
  return (
    <div className="text-center mb-8">
      <h1 className={`${bebasNeue.className} text-6xl text-gray-900 mb-2`}>
        Carrito de Compras
      </h1>
      <p className="text-lg text-gray-600">
        Prueba Técnica: API y Carrito de Compras - Hoy Trabajas
      </p>
    </div>
  );
};

export default Header;
