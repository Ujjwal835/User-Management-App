import { Inter } from "next/font/google";
import "./globals.css";
import CommonLayout from "@/components/common-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "User Management System",
  description: "Allows User to add/edit/delete",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
