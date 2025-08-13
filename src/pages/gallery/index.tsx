import Image from "next/image";
import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import ImageModal from "./components/image-modal/ImageModal";

const Gallery = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageId, setImageId] = useState<number | null>(null);
  const onClose = () => {
    setIsImageModalOpen(false);
    setImageId(null);
  };
  const onOpen = (id: number) => () => {
    setIsImageModalOpen(true);
    setImageId(id);
  };
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
            onClick={onOpen(index + 1)}
            priority={index === 1}
          />
        ))}
      </div>
      <ImageModal id={imageId} onClose={onClose} isOpen={isImageModalOpen} />
    </div>
  );
};

export default Gallery;
