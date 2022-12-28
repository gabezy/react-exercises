import React from "react";
import styles from "./Contact.module.css";
import img from "../img/contato.jpg";
import Head from "./Head";

function Contact() {
  return (
    <>
      <Head title="Ranek | Contato" description="Página de contato" />
      <section className={`${styles.contactContainer} animeLeft`}>
        <img src={img} alt="write machine" className={styles.contactImage} />
        <div className={styles.contactContent}>
          <h1>Entre em contato</h1>
          <ul className={styles.contactList}>
            <li>gabriel@frontdev.com</li>
            <li>99999-9999</li>
            <li>Rua ali perto, 999</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Contact;
