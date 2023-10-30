import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./components/header/Header";
import WebsiteContent from "./components/websiteContent/WebsiteContent";
import Youtube from "./components/button/youtube/Youtube";
import AudioVideoFormats from "./components/videoAudioFormats/VideoAudioFormats";
import HowToDownload from "./components/howToDownload/HowToDownload";
import Advantages from "./components/advantages/Advantages";
import Conclusion from "./components/conclusion/Conclusion";

export default function Home() {
  return (
    <>
      <Header />
      <WebsiteContent />
      <Youtube />
      <AudioVideoFormats />
      <HowToDownload />
      <Advantages />
      <Conclusion />
    </>
  );
}
