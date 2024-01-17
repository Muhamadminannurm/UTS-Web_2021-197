// src/components/Contact.js
import React from "react";
import "./style.css";
import "boxicons/css/boxicons.min.css";

const Contact = () => {
  return (
    <section class="profile-section" id="contact">
      <h2>My Contact</h2>
      <a href="https://github.com/Muhamadminannurm">
        <i class="bx bxl-github"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=6285785053708"
        target="_blank"
        rel="noopener"
      >
        <i class="bx bxl-whatsapp"></i>
      </a>
      <a
        href="mailto:muh.minannurmualim@gmail.com"
        target="_blank"
        rel="noopener"
      >
        <i class="bx bx-mail-send"></i>
      </a>
      <a
        href="https://www.instagram.com/muhamad_minan"
        target="_blank"
        rel="noopener"
      >
        <i class="bx bxl-instagram"></i>
      </a>
    </section>
  );
};

export default Contact;
