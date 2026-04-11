import type { Metadata } from "next";
import "../styles/global.scss";
import { Inter, Raleway, Handjet } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trainee",
  description:
    "Plataforma para encontrar vagas de trainee e estágio na área de tecnologia.",
  icons: {
    icon: "/images/logo.svg",
  },
  openGraph: {
    siteName: "Trainee",
    title: "Trainee",
    description:
      "Plataforma para encontrar vagas de trainee e estágio na área de tecnologia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} ${raleway.variable} ${handjet.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
