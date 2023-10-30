import React from "react";
import styles from "./advantages.module.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/icon-1.svg",
    heading: "Convenient and user-friendly",
    desc: "Users are provided with a convenient and user-friendly conversion process to have their mp4 videos converted and downloaded into mp3 versions without making it hard with any need for technical expertise or complex software.",
  },
  {
    id: 2,
    icon: "/icon-2.svg",
    heading: "Swift conversions",
    desc: "The efficient algorithm of the platform ensures a fast conversion process. The desired mp3 formats are provided according to the user's conversion format promptly.",
  },
  {
    id: 3,
    icon: "/icon-3.svg",
    heading: "Available across different devices",
    desc: "You can convert and download videos to audio through any device using an online mp3 converter tool. YTMP3 offers compatibility, and this lets the users enjoy downloading music from videos easily. They can easily access Audio content from various platforms to convert to listen offline.",
  },
];

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.container}>
        <h3>Advantages of YTMP3</h3>
        <p>
          Along with its immense popularity, YTMP3 provides several advantages
          that make the process easier and faster.
        </p>
        <ul>
          {data.map((list, index) => (
            <li key={list.id}>
              <h4>{list.heading}</h4>
              <p>{list.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
