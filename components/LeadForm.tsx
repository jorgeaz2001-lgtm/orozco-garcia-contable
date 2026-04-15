"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import styles from "./LeadForm.module.css";

const services = [
  "Asesoría 1:1",
  "Consultoría y Defensa Fiscal",
  "Contabilidad e Impuestos",
  "Regularización Fiscal",
  "Administración de Nómina",
  "Declaración Anual de Sueldos y Salarios",
  "Otro",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al enviar");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Error al enviar el mensaje");
    }
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle}>Solicita tu asesoría gratuita</h3>
      <p className={styles.formSubtitle}>
        Cuéntanos sobre ti y nos pondremos en contacto en menos de 24 horas.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>Nombre completo *</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Ej. Juan Pérez"
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Correo electrónico *</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="ejemplo@email.com"
            />
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>Teléfono / WhatsApp *</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="878 123 4567"
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Servicio de interés</span>
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="">Selecciona una opción</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className={styles.field}>
          <span className={styles.label}>Mensaje</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="¿En qué podemos ayudarte?"
          />
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className={styles.submit}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className={styles.spin} />
              Enviando...
            </>
          ) : (
            <>
              <Send size={18} />
              Enviar mensaje
            </>
          )}
        </button>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={`${styles.alert} ${styles.success}`}
            >
              <CheckCircle2 size={18} />
              <span>
                ¡Mensaje enviado! Te contactaremos pronto.
              </span>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={`${styles.alert} ${styles.error}`}
            >
              <AlertCircle size={18} />
              <span>{errorMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
