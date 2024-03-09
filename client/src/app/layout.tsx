import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gerenciamento de Clientes",
  description:
    "Sistema de Gerenciamento de Clientes para limpeza em residências",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased",
          openSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
