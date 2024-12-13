import "./globals.css";
import { Container } from "@/shared/Components/Container/Container";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "./components/ui/toaster";
import Sidebar from "@/shared/Sidebar";

export const metadata = {
  title: "Text Summarizer",
  description: "Summarize and manage texts with ease",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex justify-center items-center h-screen text-lg",
          inter.className
        )}
      >
        <Toaster />
        <Container>
          <Sidebar />
          {children}
        </Container>
      </body>
    </html>
  );
}
