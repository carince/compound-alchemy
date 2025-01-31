import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { AppProps } from "next/app";

import { DM_Sans, Geist_Mono } from "next/font/google";

const geistSans = DM_Sans({
  weight: "300",
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`antialiased ${geistSans.className} ${geistMono.className}`}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </main>
  );
}
