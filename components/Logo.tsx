import styles from "./Logo.module.css";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  light?: boolean;
}

export default function Logo({ showText = true, size = "md", light = false }: LogoProps) {
  const scale = size === "sm" ? 0.7 : size === "lg" ? 1.2 : 1;
  return (
    <div
      className={`${styles.logoWrap} ${light ? styles.light : ""}`}
      style={{ transform: `scale(${scale})` }}
    >
      <div className={styles.monogramBox}>
        <svg viewBox="0 0 100 100" className={styles.svg} aria-hidden="true">
          {/* Shield / arch background shape */}
          <path
            d="M50 5 C20 5 5 25 5 50 C5 80 50 95 50 95 C50 95 95 80 95 50 C95 25 80 5 50 5 Z"
            fill="currentColor"
          />
        </svg>
        <span className={styles.monogram}>OG</span>
      </div>
      {showText && (
        <div className={styles.text}>
          <span className={styles.brand}>OROZCO&GARCIA</span>
          <span className={styles.tagline}>Despacho Contable</span>
        </div>
      )}
    </div>
  );
}
