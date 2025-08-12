import Image from "next/image";
import React from "react";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>ОТЕЛЬ АСА</h1>
      <div className={styles.gallery}>
        {Array.from({ length: 26 }).map((_, index) => (
          <Image
            key={`g_${index}`}
            src={`/assets/images/gallery/${index + 1}.jpg`}
            width={300}
            height={300}
            alt="gallery"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
