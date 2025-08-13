/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ImageModal.module.scss";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface IImageModalProps {
  isOpen: boolean;
  onClose?: () => void;
  id: number | null;
}

const ImageModal = ({ isOpen = true, onClose = () => {}, id }: IImageModalProps) => {
  const [swyperControl, setSwyperControl] = useState<any>(null);

  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalContainer = document.createElement("div");
    document.body.appendChild(portalContainer);
    setContainer(portalContainer);

    return () => {
      document.body.removeChild(portalContainer);
    };
  }, []);

  useEffect(() => {
    if (swyperControl && id) {
      swyperControl.slideTo(id - 1, 0);
    }
  }, [swyperControl, id]);

  const modal = (
    <div className={classNames(styles.modalWrapper, { [styles.active]: isOpen })}>
      <div className={styles.modal}>
        <div className={styles.images}>
          <Swiper
            modules={[Navigation, Autoplay, Controller]}
            navigation
            speed={1000}
            slidesPerView={1}
            onSwiper={setSwyperControl}
            controller={{ control: swyperControl as any }}
          >
            {Array.from({ length: 26 }).map((_, index) => (
              <SwiperSlide className={styles.image} key={`g_${index}`}>
                <Image src={`/assets/images/gallery/${index + 1}.jpg`} width={500} height={500} alt="gallery" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.closeButton} onClick={onClose}>
        CLOSE
      </div>
    </div>
  );

  if (isOpen && container) {
    return createPortal(modal, container);
  }
  return null;
};

export default ImageModal;
