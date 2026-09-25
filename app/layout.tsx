import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald", // Updated to reflect the Oswald font
});

export const metadata: Metadata = {
  title: {
    default: "Toolbox",
    template: "%s | Toolbox",
  },
  description: "Website to get 12 in the exam 🤙",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} min-h-full antialiased`}>
        <Header />
        <main className="flex-1 w-full h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
