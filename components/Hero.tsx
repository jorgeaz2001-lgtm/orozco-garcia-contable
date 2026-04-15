"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const distance = Math.max(window.innerHeight * 0.75, 1);
      const rawProgress = window.scrollY / distance;
      const next = Math.min(Math.max(rawProgress, 0), 0.9);
      setScrollProgress(next);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cinematicStyle = {
    "--scroll-progress": scrollProgress,
  } as CSSProperties;

  return (
    <section id="inicio" className={styles.hero} style={cinematicStyle}>
      <div className={styles.cinematicFrame}>
        <video
          className={styles.cinematicVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="metadata"

        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className={styles.overlay} />
        <div className={styles.whiteWash} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.cinematicContent}
        >
          <h1 className={styles.heading}>
            Soluciones integrales de <strong>Contabilidad</strong>,{" "}
            <strong>Impuestos</strong> y <strong>Planeación Fiscal</strong>
          </h1>
          <p className={styles.subheading}>
            Te ayudamos a crecer con orden y estructura. Asesoría personalizada
            para emprendedores, empresarios y trabajadores.
          </p>
          <div className={styles.ctas}>
            <a
              href="https://wa.me/528782679582?text=Hola%2C%20me%20interesa%20conocer%20sus%20servicios%20contables."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <Phone size={18} />
              Agenda tu asesoría
            </a>
            <a
              href="mailto:contacto@orozcogarcia.com"
              className={styles.btnSecondary}
            >
              <Mail size={18} />
              contacto@orozcogarcia.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
