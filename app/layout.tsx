import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Was Chic et Fils - Matériaux de Construction Premium",
  description: "L'excellence du matériel de construction et outillage premium. Des prix chics pour des clients chics.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Was Chic et Fils - Matériaux de Construction Premium",
    description: "L'excellence du matériel de construction et outillage premium. Des prix chics pour des clients chics.",
    url: "https://waschic.com",
    siteName: "Was Chic et Fils",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Was Chic et Fils - Matériaux de Construction Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Was Chic et Fils - Matériaux de Construction Premium",
    description: "L'excellence du matériel de construction et outillage premium. Des prix chics pour des clients chics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-display antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
