import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>Бронирование отеля</h1>
      <iframe src="https://form.jotform.com/250573900011444?parentURL=https%3A%2F%2Fasahotel.ru%2Fcontacs%2F&jsForm=true"></iframe>
    </div>
  );
};

export default Contact;
