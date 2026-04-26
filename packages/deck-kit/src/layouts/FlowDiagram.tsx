import { Fragment, type ReactNode } from "react";
import { Diagram } from "./Diagram";
import { Node } from "../primitives/Node";
import styles from "./FlowDiagram.module.css";

export interface FlowDiagramNode {
  title: ReactNode;
  body?: ReactNode;
}

interface FlowDiagramProps {
  nodes: FlowDiagramNode[];
  /** Wrap in a Diagram frame. Default true (matches every existing usage). */
  framed?: boolean;
}

export function FlowDiagram({ nodes, framed = true }: FlowDiagramProps) {
  // Arrow width: legacy CSS used 30px for 5-node flows and 34px for 4-node.
  // Anything else falls into the same buckets.
  const arrowWidth = nodes.length >= 5 ? 30 : 34;
  const template = nodes
    .map((_, i) => (i === nodes.length - 1 ? "1fr" : `1fr ${arrowWidth}px`))
    .join(" ");

  const flow = (
    <div className={styles.flow} style={{ gridTemplateColumns: template }}>
      {nodes.map((node, i) => (
        <Fragment key={i}>
          <Node title={node.title}>{node.body}</Node>
          {i < nodes.length - 1 && <div className={styles.arrow}>→</div>}
        </Fragment>
      ))}
    </div>
  );

  return framed ? <Diagram>{flow}</Diagram> : flow;
}
