import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CrispProChat from "@/components/CrispProChat";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Naxent | Financial Technology Solutions",
  description: "Naxent is a financial technology company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <CrispProChat />
      </body>
    </html>
  );
}