import Schema from "./Schema";
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
    url: "https://www.youtubetomp3converter.world/",
    type: "website",
    image: "https://www.youtubetomp3converter.world/logo.svg",
  },
  metadataBase: new URL("https://www.youtubetomp3converter.world/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <meta
          name="google-site-verification"
          content="fQjAwpScVscNFNaTYMrYhHBeQtVVNx39dmKy1vB8cQE"
        />
      </head>
      <body className={inter.className}>
        <Schema /> {children}
      </body>
    </html>
  );
}
