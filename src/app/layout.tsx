import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hack Europa 2.0 | March 13 | 8-Hour Hackathon",
  description: "Join Hack Europa 2.0 on March 13 for an 8-hour high-intensity innovation sprint.",
  metadataBase: new URL('https://hackeuropa.com'),
  openGraph: {
    title: 'Hack Europa 2.0 | March 13 | 8-Hour Hackathon',
    description: 'Join Hack Europa 2.0 on March 13 for an 8-hour high-intensity innovation sprint.',
    url: 'https://hackeuropa.com',
    siteName: 'Hack Europa 2.0',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hack Europa 2.0 | March 13 | 8-Hour Hackathon',
    description: 'Join Hack Europa 2.0 on March 13 for an 8-hour high-intensity innovation sprint.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} antialiased text-white font-medium`}
      >
        <div className="relative">
          <div className="fixed inset-0 -z-10 backdrop-blur-[120px] opacity-70 pointer-events-none" />
          <CursorGlow />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
