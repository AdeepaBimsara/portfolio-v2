import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Adeepa Bimsara - Software Developer",
  description: "This is the portfolio of Adeepa Bimsara. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
        <body className={geist.className}>
        <main className="min-h-screen bg-[#050816] text-white">
          <div className="mx-auto max-w-7xl px-6">
            <Navbar />
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}
