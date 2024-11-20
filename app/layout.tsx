import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "./components/Layout";
import { Providers } from "./context/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light_bg dark:bg-black text-gray-900 dark:text-white`}
      >
        <Providers>
        <Layout>
          {children}
        </Layout>
        </Providers>
      </body>
    </html>
  );
}
