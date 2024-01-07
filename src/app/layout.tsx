import "@/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Chainmage",
  description: "Blockchain image service",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans h-screen flex flex-col ${inter.variable}`}>
      <header className="flex p-4 justify-between">
        <Link href="/">
        <span className="font-medium">chainmage</span>
        </Link>
        <span className="font-mono">0xdc2d01762051e143e08f5caa3efd67696bed134bac19f883cf14592f5681e194</span>
      </header>
      {children}
      </body>
    </html>
  );
}
