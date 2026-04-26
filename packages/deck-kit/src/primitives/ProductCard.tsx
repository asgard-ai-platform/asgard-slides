import type { ReactNode } from "react";
import { Card } from "./Card";
import styles from "./ProductCard.module.css";

type AsgardProduct = "odin" | "mimir" | "sindri" | "heimdall" | "yggdrasil" | "asgard";

interface ProductCardProps {
  product: AsgardProduct;
  iconSrc: string;
  iconAlt: string;
  title: ReactNode;
  children?: ReactNode;
}

export function ProductCard({ product, iconSrc, iconAlt, title, children }: ProductCardProps) {
  return (
    <Card className={`${styles.productCard} ${styles[product]}`}>
      <div className={styles.productHead}>
        <div className={styles.productIcon}>
          <img src={iconSrc} alt={iconAlt} />
        </div>
        <div>{title}</div>
      </div>
      {children}
    </Card>
  );
}
