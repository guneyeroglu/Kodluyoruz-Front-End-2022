import React from "react";
import FooterTop from "./FooterTop";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <>
      <FooterTop className={styles.footer__top} />
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <span>
            © 2022 | Designed by{" "}
            <a
              href="https://www.linkedin.com/in/guneyeroglu/"
              target="_blank"
              rel="noreferrer"
            >
              Güney Eroğlu
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
