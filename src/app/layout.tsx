import { Metadata } from "next";
import NavMenu from "components/NavMenu";
import "styles/globals.css";
import Footer from "components/Footer";

export const metadata: Metadata = {
  title: "Lucy Awrey's Personal Site",
  description: "A website for showing off Lucy's cool stuff.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="h-full bg-gray-100">
        <NavMenu />
        <main>{children}</main>
        <div className="py-16"></div>
        <Footer />
      </body>
    </html>
  );
}
