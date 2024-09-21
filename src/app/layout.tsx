import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const playwrite = localFont({
  src: "./fonts/PlaywriteDEGrund-VF.ttf",
  variable: "--font-playwrite",
  weight: "100 400",
});

export const metadata: Metadata = {
  title: "Janaru - Your journal page",
  description: "Share your day with others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playwrite.variable} text-base text-zinc-900 bg-orange-50, min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
