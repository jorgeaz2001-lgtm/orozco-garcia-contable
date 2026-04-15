"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, MapPin } from "lucide-react";
import styles from "./WhyUs.module.css";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Estrategia fiscal real",
    desc: "No solo cumplimos, optimizamos tu resultado fiscal dentro del marco legal.",
  },
  {
    icon: Clock,
    title: "Atención oportuna",
    desc: "Respuesta clara y rápida. Lunes a viernes de 9:00 a.m. a 5:00 p.m.",
  },
  {
    icon: MapPin,
    title: "Cerca de ti",
    desc: "Oficina en Piedras Negras, Coahuila, con alcance a todo México.",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.whyUs}>
      <div className="container">
        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={styles.item}
            >
              <r.icon size={32} className={styles.icon} />
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.desc}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
