import { useEffect, useState } from "react";
import styles from "./SwipeHint.module.css";

const STORAGE_KEY = "deck-swipe-hint-shown";
const SHOW_MS = 4500;

function shouldShowInitial(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (window.localStorage.getItem(STORAGE_KEY) === "1") return false;
  } catch {
    // localStorage unavailable (private mode etc.) — proceed without persistence.
  }
  return window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
}

function markDismissed() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // ignore
  }
}

/**
 * Floating chip that appears once on a touch device, hinting that swipe
 * is available. Auto-fades after ~4.5s and won't show again. Pointer
 * (mouse) devices don't see it.
 */
export function SwipeHint() {
  const [show, setShow] = useState(shouldShowInitial);

  useEffect(() => {
    if (!show) return;
    const t = window.setTimeout(() => {
      setShow(false);
      markDismissed();
    }, SHOW_MS);
    return () => window.clearTimeout(t);
  }, [show]);

  if (!show) return null;
  return (
    <button
      className={styles.hint}
      onClick={() => { setShow(false); markDismissed(); }}
      aria-label="dismiss swipe hint"
    >
      <span className={`${styles.arrow} ${styles.arrowLeft}`}>‹</span>
      <span>左右滑動切換</span>
      <span className={`${styles.arrow} ${styles.arrowRight}`}>›</span>
    </button>
  );
}
