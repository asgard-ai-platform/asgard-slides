import styles from "./DemoShot.module.css";

interface DemoShotProps {
  src: string;
  alt: string;
  size?: "default" | "compact" | "medium" | "large";
  caption?: string;
}

export function DemoShot({ src, alt, size = "default", caption }: DemoShotProps) {
  const sizeCls = size === "default" ? "" : styles[size];
  return (
    <>
      <img src={src} alt={alt} className={`${styles.demoShot} ${sizeCls}`} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </>
  );
}
