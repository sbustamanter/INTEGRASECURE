import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ciberseguridad y IA en Banca - Protección contra Fraudes",
  description: "Información sobre el impacto de la ciberseguridad y la inteligencia artificial en la seguridad bancaria. Recibe recomendaciones personalizadas para protegerte de fraudes bancarios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}