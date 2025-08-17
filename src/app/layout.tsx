import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import IconSprite from "@/components/journey/IconSprite";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "XBrainer AI - EEG Journey",
  description: "Experience how XBrainer secures your EEG stream step by step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <IconSprite />
        {children}
      </body>
    </html>
  );
}