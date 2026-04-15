"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowDown } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={styles.text}
        >
          <span className={styles.badge}>Servicio en Piedras Negras y todo México</span>
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
            <a href="mailto:contacto@orozcogarcia.com" className={styles.btnSecondary}>
              <Mail size={18} />
              contacto@orozcogarcia.com
            </a>
          </div>
        </motion.div>
      </div>

      <a href="#servicios" className={styles.scrollDown} aria-label="Scroll to services">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
