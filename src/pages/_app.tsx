import "@/styles/globals.css";
import { AnimatePresence, motion } from "motion/react";
import type { AppProps } from "next/app";
import { DM_Sans, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { Toaster } from 'sonner';

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
  const router = useRouter()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
      >
        <main className={`antialiased ${geistSans.className} ${geistMono.className}`}>
          <Component {...pageProps} />
          <Toaster richColors={true} theme="dark" />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
