import type { ReactNode } from "react";
import styles from "./Tree.module.css";

export interface TreeNode {
  label: ReactNode;
  children?: TreeNode[];
}

interface TreeProps {
  root: TreeNode;
}

function TreeItem({ node }: { node: TreeNode }) {
  return (
    <li className={styles.node}>
      <span className={styles.label}>{node.label}</span>
      {node.children && node.children.length > 0 && (
        <ul className={styles.children}>
          {node.children.map((child, i) => <TreeItem node={child} key={i} />)}
        </ul>
      )}
    </li>
  );
}

export function Tree({ root }: TreeProps) {
  return (
    <ul className={styles.tree}>
      <TreeItem node={root} />
    </ul>
  );
}
