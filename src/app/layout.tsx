
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Peralta | Software Developer",
  description:
    "Portafolio profesional de Rafael Peralta, desarrollador de software especializado en iOS, Swift y SwiftUI. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
