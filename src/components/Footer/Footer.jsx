import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="footer__title">Connet with me.</div>

        <div className="footer__icons">
          <i class="bx bxl-facebook-circle"></i>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-gmail"></i>
        </div>

        <a href="https://shardulgawande.netlify.app/" target="_blank">
          {" "}
          <p>Made by Shardul Gawande</p>
        </a>
      </footer>
    </>
  );
};
