import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../scss/app.scss";
import FooterHAB from "./footer/page";
import HeaderHAB from "./header/page";
import { CartProvider } from "../context/CartContext";
import { AppProviders } from "@/context/AppContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charm Charm Saffron",
  description:
    "Nhập khẩu chính ngạch Saffron Iran dòng cao cấp nhất Extra Super Negin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppProviders>
        <body className={inter.className}>
          <header>
            <HeaderHAB />
          </header>
          <div>{children}</div>

          <footer>
            <FooterHAB />
          </footer>
        </body>
      </AppProviders>
    </html>
  );
}
