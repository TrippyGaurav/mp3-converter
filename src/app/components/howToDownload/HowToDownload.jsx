import React from "react";
import styles from "./howToDownload.module.scss";
import Image from "next/image";

const howToDownloadData = [
  "Open YouTube and search for the required video content.",
  "Click on the share button and select the copy link or copy the URL from the browser's address bar.",
  "Find a YouTube downloader online like y2mate and paste the link to convert it.",
  "After the conversion is complete click on the option to download the required video format and video file size.",
  "Save the downloaded file in your folder to convert it into any format you like.",
];

const howToConvertVideoData = [
  "Go to YouTube and search for the video you want to download.",
  "Play the video and copy the URL from the browser's address bar. You can also copy the link from the share option below the video.",
  "Search for an online YouTube audio converter to convert YouTube to audio format.",
  "Paste the link in the provided space and click on the convert button.",
  "After the conversion is done, you can see the download option with different file sizes to choose from.",
  "Click on the download button to get your YouTube to MP3 converter fast.",
];

const HowToDownload = () => {
  return (
    <>
      <div className={styles.howToDownload}>
        <div className={styles.container}>
          <div className={styles.titles}>
            <h3>How to download a video</h3>
            <h4>
              It&apos;s very easy for anyone to download a video using online
              tools.
            </h4>
          </div>

          <ul>
            {howToDownloadData.map((list, index) => (
              <li key={index}>
                <Image
                  src={`/youtube-icon.svg`}
                  width={82}
                  height={70}
                  alt="youtube-icon"
                />

                <span>{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.howToDownload}>
        <div className={styles.container}>
          <div className={styles.titles}>
            <h3>How to Convert video to mp3</h3>
            <h4>
              Free YouTube to mp3 converter tool allows you to convertidor
              YouTube mp3 formats online.
            </h4>
          </div>

          <ul>
            {howToConvertVideoData.map((list, index) => (
              <li key={index}>
                <Image
                  src={`/youtube-icon.svg`}
                  width={82}
                  height={70}
                  alt="youtube-icon"
                />

                <span>{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HowToDownload;
