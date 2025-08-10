import { FC, PropsWithChildren } from "react";
import { roboto } from "./ui/fonts";
import "./ui/globals.css";
import Header from "./components/Header";
import { Tabs } from "./ui/tabs";
import MainTab from "./components/MainTab";
import { CartRefreshProvider } from "./context/CartRefreshContext";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  
  return (
    <html lang="es">
      <body className={`${roboto.className} antialiased`}>
        <CartRefreshProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
              <Header />
              <Tabs defaultValue="products" className="space-y-8">
                <MainTab />
                {children}
              </Tabs>
            </div>
          </div>
        </CartRefreshProvider>
      </body>
    </html>
  );
};

export default RootLayout;
