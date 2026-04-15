"use client";

import { motion } from "framer-motion";
import styles from "./Process.module.css";

const steps = [
  {
    num: "01",
    title: "Diagnóstico inicial",
    desc: "Conocemos tu situación fiscal y contable actual sin costo.",
  },
  {
    num: "02",
    title: "Estrategia a tu medida",
    desc: "Diseñamos un plan de acción claro, transparente y eficiente.",
  },
  {
    num: "03",
    title: "Ejecución y seguimiento",
    desc: "Implementamos las soluciones y te acompañamos durante todo el proceso.",
  },
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className="sectionTitle">Cómo trabajamos</span>
          <h2 className="sectionHeading">Un proceso simple y seguro</h2>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={styles.step}
            >
              <span className={styles.number}>{step.num}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
