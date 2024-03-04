import type { Metadata } from "next";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Card app",
  description: "Card app by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider />
        <main>{children}</main>
      </body>
    </html>
  );
}
