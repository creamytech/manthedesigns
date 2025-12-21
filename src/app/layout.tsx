import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Grain } from "@/components/ui/Grain";
import { PageTransition } from "@/components/animations/PageTransition";
import { CartProvider } from "@/context/CartContext";
import { AudioProvider } from "@/context/AudioContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { AudioToggle } from "@/components/ui/AudioToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Matthew Manthé | Ink, Graphite, Plaster",
  description: "The immersive art world of Matthew Manthé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}
      >
        <AudioProvider>
          <CartProvider>
            <Grain />
            <PageTransition>{children}</PageTransition>
            <CartDrawer />
            <AudioToggle />
          </CartProvider>
        </AudioProvider>
      </body>
    </html>
  );
}

