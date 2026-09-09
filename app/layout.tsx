import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minister J-Y | Liberian Afro Gospel Artist",
  description:
    "Official website of Minister J-Y, a Liberian Afro Gospel artist from Monrovia using music to win souls, inspire faith, and bring the lost to Christ.",
  keywords: [
    "Minister J-Y",
    "Julian Tisdell",
    "Liberian Gospel Artist",
    "Afro Gospel",
    "Liberia Gospel Music",
    "Minister J-Y Liberia",
    "Thank You Minister J-Y",
    "Monrovia Gospel Artist",
  ],
  authors: [
    {
      name: "Minister J-Y",
    },
  ],
  openGraph: {
    title: "Minister J-Y | Liberian Afro Gospel Artist",
    description:
      "Winning souls and bringing the lost to Christ through Afro Gospel music.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}