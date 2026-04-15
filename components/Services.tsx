"use client";

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Building2,
  FileSearch,
  Calculator,
  FileText,
} from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    icon: Users,
    title: "Asesoría 1:1",
    subtitle: "Emprendedores y Empresarios",
    description:
      "Acompañamiento personalizado en temas contables, fiscales y administrativos. Estructuramos tu negocio desde el inicio y evitamos riesgos fiscales.",
  },
  {
    icon: ShieldCheck,
    title: "Consultoría y Defensa Fiscal",
    subtitle: "Personas Físicas",
    description:
      "Asesoría especializada y acompañamiento estratégico para la atención de requerimientos y revisiones por parte de la autoridad.",
  },
  {
    icon: Building2,
    title: "Contabilidad e Impuestos",
    subtitle: "PF y PM",
    description:
      "Administración contable y fiscal completa: registros de operaciones, cálculo y presentación de impuestos, y optimización de carga fiscal.",
  },
  {
    icon: FileSearch,
    title: "Regularización Fiscal",
    subtitle: "Personas Físicas y Morales",
    description:
      "Actualizamos y corregimos obligaciones fiscales pendientes o inconsistencias ante la autoridad para dejar tu situación al día.",
  },
  {
    icon: Calculator,
    title: "Administración de Nómina",
    subtitle: "Empresas",
    description:
      "Gestión de nómina, Seguridad Social (IMSS) y cumplimiento de obligaciones laborales. Implementamos un sistema 360° que protege tu empresa.",
  },
  {
    icon: FileText,
    title: "Declaración Anual de Sueldos y Salarios",
    subtitle: "Trabajadores con Patrón",
    description:
      "Presentamos tu declaración con estrategia y optimizamos tu resultado fiscal para trabajadores con patrón en México.",
  },
];



export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className="sectionTitle">Nuestros Servicios</span>
          <h2 className="sectionHeading">Todo lo que tu negocio necesita</h2>
          <p className={styles.lead}>
            Desde la contabilidad diaria hasta la defensa ante el SAT, te acompañamos en cada paso.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className={styles.card}
            >
              <div className={styles.iconBox}>
                <s.icon size={28} strokeWidth={1.8} />
              </div>
              <span className={styles.subtitle}>{s.subtitle}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
