import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AnimatePresence, motion } from "motion/react";
import type { AppProps } from "next/app";
import { DM_Sans, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";

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
    <UserProvider>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <main className={`antialiased ${geistSans.className} ${geistMono.className}`}>
            <Component {...pageProps} />
          </main>
        </motion.div>
      </AnimatePresence>
    </UserProvider>
  );
}
