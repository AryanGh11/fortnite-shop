import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Hydrate from "./components/Hydrate";

//Define the fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

//Details of page
export const metadata: Metadata = {
  title: "Fortnite Shop",
  description: "A test project",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //Fetch user
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className={`${inter.variable}`}>
      <Hydrate>
        <Nav user={session?.user} expires={session?.expires as string} />
        {children}
      </Hydrate>
    </html>
  );
}
