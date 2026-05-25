import type { ReactNode } from "react";
import styles from "./PricingCard.module.css";

interface PricingCardProps {
  eyebrow?: ReactNode;
  currency?: ReactNode;
  amount: ReactNode;
  unit?: ReactNode;
  note?: ReactNode;
}

export function PricingCard({ eyebrow, currency, amount, unit, note }: PricingCardProps) {
  return (
    <div className={styles.card}>
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <div className={styles.price}>
        {currency && <span className={styles.currency}>{currency}</span>}
        <span className={styles.amount}>{amount}</span>
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
      {note && <div className={styles.note}>{note}</div>}
    </div>
  );
}
