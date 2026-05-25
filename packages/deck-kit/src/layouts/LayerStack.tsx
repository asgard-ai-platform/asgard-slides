import type { ReactNode } from "react";
import styles from "./LayerStack.module.css";

export interface StackLayer {
  label: ReactNode;
  items?: ReactNode[];
  note?: ReactNode;
}

interface LayerStackProps {
  layers: StackLayer[];
}

export function LayerStack({ layers }: LayerStackProps) {
  return (
    <div className={styles.stack}>
      {layers.map((layer, i) => (
        <div className={styles.layer} key={i}>
          <div className={styles.label}>{layer.label}</div>
          <div className={styles.content}>
            {layer.items ? (
              <div className={styles.items}>
                {layer.items.map((it, j) => (
                  <span className={styles.item} key={j}>{it}</span>
                ))}
              </div>
            ) : (
              layer.note && <span className={styles.note}>{layer.note}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
