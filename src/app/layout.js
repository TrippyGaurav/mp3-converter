import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "  Youtube to MP3 Converter:Your Video to Audio Conversion tool",
  description:
    "Downloading YouTube videos for songs has been made easy. Find the best Youtube to MP3 Converter for easily converting your MP4 into high-quality MP3",
  openGraph: {
    title: "  Youtube to MP3 Converter:Your Video to Audio Conversion tool",
    description:
      "Downloading YouTube videos for songs has been made easy. Find the best Youtube to MP3 Converter for easily converting your MP4 into high-quality MP3",
    url: "https://www.youtubeparty.com/mp-3-converter",
    type: "website",
    image: "https://www.youtubeparty.com/main-logo.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link rel="canonical" href="https://www.youtubeparty.com/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
