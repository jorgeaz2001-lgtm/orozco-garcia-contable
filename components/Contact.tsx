"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import LeadForm from "./LeadForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className="sectionTitle">Contacto</span>
          <h2 className="sectionHeading">Hablemos de tu situación fiscal</h2>
          <p className={styles.lead}>
            Agenda tu asesoría y conoce nuestros paquetes para cumplir de forma segura y estratégica.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <LeadForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className={styles.side}
          >
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <Phone size={20} />
                <div>
                  <span className={styles.label}>WhatsApp / Teléfono</span>
                  <a
                    href="https://wa.me/528782679582"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.value}
                  >
                    878 267 9582
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Mail size={20} />
                <div>
                  <span className={styles.label}>Correo electrónico</span>
                  <a href="mailto:contacto@orozcogarcia.com" className={styles.value}>
                    contacto@orozcogarcia.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <MapPin size={20} />
                <div>
                  <span className={styles.label}>Ubicación</span>
                  <span className={styles.value}>Piedras Negras, Coahuila · Servicio en todo México</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Clock size={20} />
                <div>
                  <span className={styles.label}>Horario</span>
                  <span className={styles.value}>Lunes a Viernes: 9:00 a.m. – 5:00 p.m.</span>
                </div>
              </div>
            </div>

            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55038.30945598534!2d-100.570!3d28.704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865f97c1b935e9af%3A0x82c25b1d1f7a7e1e!2sPiedras%20Negras%2C%20Coah.!5e0!3m2!1ses!2smx!4v1713200000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Piedras Negras"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
