import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A+ Badminton Academy | Professional Coaching in Bengaluru",
  description: "Join Bengaluru's premier badminton academy led by Priyadarshan Sir. We offer expert coaching for kids and adults, focusing on fundamentals, fitness, and match strategy.",
  keywords: ["A+ Badminton Academy", "badminton coaching Bengaluru", "badminton academy Laggere", "Priyadarshan badminton coach", "badminton training for kids"],
  authors: [{ name: "A+ Badminton Academy Team" }],
  openGraph: {
    title: "A+ Badminton Academy | Train Like a Champion",
    description: "Expert badminton coaching for all skill levels in Bengaluru.",
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
