import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import CustomCursor from "@/components/CustomCursor";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "A+ Badminton Academy",
              "image": "https://aplusbadminton.com/hero.png",
              "@id": "https://aplusbadminton.com",
              "url": "https://aplusbadminton.com",
              "telephone": "+919686665516",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3rd Main Road, Laggere Main road, 1st Cross Rd",
                "addressLocality": "Bengaluru",
                "postalCode": "560058",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 13.0199748,
                "longitude": 77.5255474
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "05:00",
                  "closes": "23:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/aplusbadminton",
                "https://www.instagram.com/aplusbadminton"
              ]
            })
          }}
        />
        <CustomCursor />
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}
