import type { Metadata } from "next";
import "./styles/globals.scss";
import { sora } from "./fonts";
import Nav from "./nav";
import { Nabla } from "next/font/google";
import Logo from "./logo";
import Socials from "./socials";
import Booking from "./booking";
export const metadata: Metadata = {
  title: "Furr Pets Sake",
  description: "Pet sitting services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <header>
          <Nav />
          <Logo />
          <Socials />
        </header>
        {children}
      </body>
    </html>
  );
}
