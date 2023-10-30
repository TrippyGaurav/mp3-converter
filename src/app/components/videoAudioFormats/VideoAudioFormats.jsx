import React from "react";
import styles from "../websiteContent/websiteContent.module.scss";
import Image from "next/image";

const AudioVideoFormats = () => {
  return (
    <div className={styles[`website-content`]}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Video and Audio Formats</h3>
          <p>
            Most conversion tools allow you to convert the content into many
            formats. The video link can be downloaded in any format like mp4,
            MOV, etc., and then can be converted into any audio format like mp3,
            wav, etc. But most people convert YouTube to MP3 online. The link or
            URL to mp3 conversion can also be done directly without downloading
            the content.
          </p>
        </div>
        <div className={styles.right}>
          <Image
            src={`/videoAudio.svg`}
            alt="website-content"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioVideoFormats;
