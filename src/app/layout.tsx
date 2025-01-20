import "./globals.css";

import type { Metadata } from "next";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { DM_Sans, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

// import Branding from "@/components/Branding";
// import Spinner from "@/components/Spinner";

const dmSans = DM_Sans({
  weight: "300",
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Compound Alchemy"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${dmSans.className} ${geistMono.className} antialiased`} lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>
        <div className="TransitionContext">
          <UserProvider>
            {children}
            <Toaster
              theme="dark"
              toastOptions={{
                closeButton: true,
                classNames: {
                  toast: "select-none",
                }
              }}
              richColors={true}
              position="bottom-center"
            />
          </UserProvider>
        </div>
      </body>
    </html>
  );
}
