"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="#inicio" className={styles.logoLink}>
            <Logo size="sm" />
          </a>

          <ul className={styles.desktopNav}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/528782679582?text=Hola%2C%20me%20interesa%20conocer%20sus%20servicios%20contables."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            WhatsApp
          </a>

          <button
            className={styles.burger}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            <div className="container">
              <ul className={styles.mobileNav}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.mobileLink}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://wa.me/528782679582?text=Hola%2C%20me%20interesa%20conocer%20sus%20servicios%20contables."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileCta}
                    onClick={() => setOpen(false)}
                  >
                    Escríbenos por WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
