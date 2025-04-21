import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lato = localFont({
  src: [
    { path: "../fonts/Lato-Black.ttf", weight: "900", style: "normal" },
    { path: "../fonts/Lato-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Lato-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Lato-Thin.ttf", weight: "100", style: "normal" },
  ],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Data Masking & Tokenization",
  description: "A presentation on data masking and tokenization with demos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} ${lato.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}
