import type React from "react";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "../components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import QueryProvider from "./QueryProvider";
import { ReactScan } from "../components/ReactScan";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TastyMonial",
  description: "A modern platform for collecting and managing testimonials",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="TastyMonial" />
        <meta
          property="og:description"
          content="A modern platform for collecting and managing testimonials"
        />
        <meta property="og:image" content="/icons/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <Script
          src="https://unpkg.com/react-scan/dist/auto.global.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <ReactScan />
            {children}
          </QueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
