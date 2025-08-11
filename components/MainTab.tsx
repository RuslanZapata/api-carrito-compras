"use client";
import { Calculator, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const links = [
  {
    href: "/",
    icon: Package,
    label: "Productos",
  },
  {
    href: "/cart",
    icon: ShoppingBag,
    label: "Carrito",
  },
  {
    href: "/optimizer",
    icon: Calculator,
    label: "Optimizador",
  },
];

const MainTab = () => {
  const pathname = usePathname();

  return (
    <div className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-3 max-w-md mx-auto">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "flex items-center gap-2 justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            pathname === link.href && "bg-background text-foreground shadow-sm"
          )}
        >
          <link.icon className="h-4 w-4" />
          <span className="hidden sm:inline">{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default MainTab;
