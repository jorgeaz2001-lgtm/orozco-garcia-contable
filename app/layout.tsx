import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Orozco & Garcia | Despacho Contable en Piedras Negras",
  description:
    "Soluciones integrales de contabilidad, impuestos, planeación fiscal y estrategia. Servicio en Piedras Negras, Coahuila y todo México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
