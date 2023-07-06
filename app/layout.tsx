// ** Import Components
import Nav from "@components/Nav";

// ** Import CSS
import "@styles/globals.css";

// ** Import Font
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fishery",
  description: "Fishery is a website to introduce a fish from indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EDFCF8] h-full relative`}>
        <div className="px-60 py-5 space-y-10">
          <Nav />

          {children}
        </div>
      </body>
    </html>
  );
}
