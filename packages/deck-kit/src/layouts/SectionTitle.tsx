import type { ReactNode } from "react";
import { Kicker } from "../primitives/Kicker";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  /** Layer label, e.g. "L2 · Tools / MCP". Rendered as the [data-layer] suffix on the kicker. */
  layer: string;
  /** Kicker text before the layer suffix, e.g. "Layer". */
  kicker: ReactNode;
  /** Main title (rendered as <h1>). */
  title: ReactNode;
  /** Optional lead paragraph. */
  lead?: ReactNode;
}

export function SectionTitle({ layer, kicker, title, lead }: SectionTitleProps) {
  return (
    <div className={styles.titleStack}>
      <Kicker layer={layer}>{kicker}</Kicker>
      <h1>{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
