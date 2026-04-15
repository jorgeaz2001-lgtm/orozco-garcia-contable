"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="nosotros" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.visual}
          >
            <div className={styles.card}>
              <Logo size="lg" />
              <p className={styles.slogan}>
                &ldquo;Te ayudamos a crecer con orden y estructura.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.text}
          >
            <span className="sectionTitle">Sobre nosotros</span>
            <h2 className="sectionHeading">Orozco & Garcia Despacho Contable</h2>
            <p>
              Somos un despacho contable con sede en Piedras Negras, Coahuila,
              enfocado en brindar soluciones integrales de contabilidad,
              impuestos y planeación fiscal a emprendedores, empresas y
              trabajadores de todo México.
            </p>
            <p>
              Nuestro compromiso es simple: orden, estructura y resultados. Te
              acompañamos desde la primera consulta hasta la resolución efectiva
              de tus obligaciones fiscales.
            </p>
            <ul className={styles.list}>
              <li>Atención personalizada y cercana</li>
              <li>Enfoque en optimización fiscal legal</li>
              <li>Experiencia con personas físicas y morales</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
