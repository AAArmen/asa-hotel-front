import React from "react";
import styles from "./Contact.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getLayoutInfo } from "@/services/getLayoutInfo";

const Contact = () => {
  const layoutInfo = getLayoutInfo();
  return (
    <div className={styles.pageContainer}>
      <h1>Контакт</h1>
      <div className={styles.contactInfo}>
        <div className={styles.item}>{layoutInfo.mainPhone}</div>
        <div className={styles.item}>{layoutInfo.secondaryPhone}</div>
      </div>
      <div className={styles.socials}>
        <Link href={layoutInfo.whatsAppLink} className={styles.link} target="_blank">
          <Image src="/assets/images/whatsapp.png" alt="whatsapp" width={174} height={34} />
        </Link>
        <Link href={layoutInfo.viberLink} className={styles.link} target="_blank">
          <Image src="/assets/images/viber.png" alt="viber" width={174} height={34} />
        </Link>
      </div>
      <h2>Бронирование отеля</h2>
      <iframe src="https://form.jotform.com/250573900011444?parentURL=https%3A%2F%2Fasahotel.ru%2Fcontacs%2F&jsForm=true"></iframe>
    </div>
  );
};

export default Contact;
