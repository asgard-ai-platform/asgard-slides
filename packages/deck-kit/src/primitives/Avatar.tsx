import type { ReactNode } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  src?: string;
  /** Fallback when no src: 1–2 chars rendered on a brand-tint disc. */
  initials?: string;
  alt?: string;
}

export function Avatar({ src, initials, alt }: AvatarProps) {
  if (src) return <img className={styles.avatar} src={src} alt={alt ?? ""} />;
  return (
    <div className={`${styles.avatar} ${styles.initials}`} role="img" aria-label={alt}>
      {initials}
    </div>
  );
}

interface PersonaProps {
  src?: string;
  initials?: string;
  name: ReactNode;
  role: ReactNode;
}

export function Persona({ src, initials, name, role }: PersonaProps) {
  return (
    <div className={styles.persona}>
      <Avatar src={src} initials={initials} />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  );
}

interface FacepileProps {
  people: { src?: string; initials?: string }[];
}

export function Facepile({ people }: FacepileProps) {
  return (
    <div className={styles.facepile}>
      {people.map((p, i) => (
        <Avatar key={i} src={p.src} initials={p.initials} />
      ))}
    </div>
  );
}
