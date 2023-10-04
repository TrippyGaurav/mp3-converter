import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.youtubetomp3converter.world/",
              },
              headline: "Youtube to MP3 Converter",
              description:
                "YouTube has become a part of every internet user's life. You can watch videos, movies, series and even listen to the latest songs and dance routines in it. Spotify being the lead platform for music lovers, people still watch songs, music albums, mv and dance videos on this old-time platform. For listening to music offline, you need a premium Spotify account to download songs for which you need to pay to subscribe. But with a YouTube downloader, you can getmp3 download free of cost. Now you can download YouTube videos to MP3 using a free YT to MP3 converter.",
              image: "",
              author: {
                "@type": "Organization",
                name: "youtubetomp3converter",
                url: "https://www.youtubetomp3converter.world/",
              },
              publisher: {
                "@type": "Organization",
                name: "youtubetomp3converter",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.youtubetomp3converter.world/",
                },
              },
              datePublished: "",
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;
