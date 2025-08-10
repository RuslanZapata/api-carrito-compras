import { Roboto, Bebas_Neue } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export { roboto, bebasNeue };
