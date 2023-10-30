import React from "react";
import styles from "./websiteContent.module.scss";
import Image from "next/image";

const WebsiteContent = () => {
  return (
    <div className={styles[`website-content`]}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Website Content</h3>
          <p>
            YouTube has become a part of every internet user&apos;s life. You
            can watch videos, movies, series and even listen to the latest songs
            and dance routines in it. Spotify being the lead platform for music
            lovers, people still watch songs, music albums, mv and dance videos
            on this old-time platform. For listening to music offline, you need
            a premium Spotify account to download songs for which you need to
            pay to subscribe. But with a YouTube downloader, you can getmp3
            download free of cost. Now you can download YouTube videos to MP3
            using a free YT to MP3 converter.
          </p>
        </div>
        <div className={styles.right}>
          <Image
            src={`/website-content.svg`}
            alt="website-content"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteContent;
