import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <Logo size="sm" />
          <p className={styles.copy}>
            © {new Date().getFullYear()} Orozco & Garcia Despacho Contable. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
