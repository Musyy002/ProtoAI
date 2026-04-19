import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const appFont = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UIUX Mocup generator App",
  description: "Generate High quality Free UIUX Mocup Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={appFont.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}