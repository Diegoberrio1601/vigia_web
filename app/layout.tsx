import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "VigIA – Tus derechos no se detienen en la vía",
  description:
    "VigIA es la plataforma LegalTech para conductores colombianos. Conoce tus derechos, consulta el Código de Tránsito, graba procedimientos y consulta RUNT y SIMIT — todo desde una sola app.",
  keywords: [
    "VigIA",
    "derechos conductor colombiano",
    "código de tránsito Colombia",
    "multas comparendos",
    "RUNT SIMIT",
    "grabar policía Colombia",
    "app legal tránsito",
  ],
  openGraph: {
    title: "VigIA – Tus derechos no se detienen en la vía",
    description:
      "Conoce tus derechos como conductor en Colombia. IA legal, grabación segura y consultas oficiales en un solo lugar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

