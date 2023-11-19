import type { Metadata } from "next";
import { REM } from "next/font/google";
import "./globals.css";

const rem = REM({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rem",
});

export const metadata: Metadata = {
  title:
    "SocLif.com || Unlock Revolutionary Connections with SocLif - Your Hub for Seamless Social Networking",
  description:
    "Discover SocLif, where influencers, businesses, and users converge for a revolutionary social networking experience. Seamlessly connect, collaborate, and redefine your online presence. Join SocLif for boundless possibilities in the world of social media interactions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rem.variable}>
      <body>{children}</body>
    </html>
  );
}
