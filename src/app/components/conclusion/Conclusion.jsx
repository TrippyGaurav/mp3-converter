import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import styles from "./conclusion.module.scss";

const Conclusion = () => {
  return (
    <div className={styles[`conclusion`]}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Conclusion</h3>
          <p>
            If you are still paying money to listen to or watch things offline
            or to download on YouTube, then it is time you stop that. With the
            help of online mp3 converters, you can now easily create a playlist
            with YouTube videos by downloading and converting them into audio
            formats.
          </p>
          <Button />
        </div>
        <div className={styles.right}>
          <Image
            src={`/conculsion.svg`}
            alt="conculsion"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
