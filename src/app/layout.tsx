import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AeroElite | Premium Badminton Academy & Court Booking",
  description: "Experience the ultimate in badminton performance with BWF-spec wooden courts, elite coaching, and seamless booking for the modern athlete.",
  keywords: ["badminton booking", "premium badminton academy", "AeroElite", "badminton court reservation", "elite sports coaching"],
  authors: [{ name: "AeroElite Team" }],
  openGraph: {
    title: "AeroElite | Play Like a Pro. Book Like One.",
    description: "The gold standard in boutique badminton environments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}
