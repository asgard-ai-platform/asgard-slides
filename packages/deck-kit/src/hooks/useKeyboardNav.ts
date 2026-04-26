import { useEffect, useRef } from "react";
import { useDeck } from "./useDeck";

export interface KeyboardNavOptions {
  /** Called when 'o' or 'O' is pressed; toggles overview mode. */
  onToggleOverview?: () => void;
  /** Called whenever the goto-buffer changes (digits typed / cleared). UI uses this to show the buffer. */
  onGotoBufferChange?: (buffer: string) => void;
  /** Whether overview is currently open; affects Esc handling. */
  overviewOpen?: boolean;
  /** Called when Esc is pressed and the goto-buffer is empty + overview is open. */
  onCloseOverview?: () => void;
}

export function useKeyboardNav(opts: KeyboardNavOptions = {}): void {
  const { next, prev, goTo, total } = useDeck();
  const bufferRef = useRef("");
  const optsRef = useRef(opts);

  // Keep the latest opts in a ref without touching it during render.
  useEffect(() => {
    optsRef.current = opts;
  });

  useEffect(() => {
    function setBuffer(v: string) {
      bufferRef.current = v;
      optsRef.current.onGotoBufferChange?.(v);
    }

    function onKey(e: KeyboardEvent) {
      // Don't hijack typing inside form fields.
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      // Goto buffer: digit keys 0-9 build a buffer (max 3 digits).
      if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        setBuffer((bufferRef.current + e.key).slice(-3));
        return;
      }

      // Enter commits the buffer.
      if (e.key === "Enter" && bufferRef.current) {
        e.preventDefault();
        const n = parseInt(bufferRef.current, 10);
        setBuffer("");
        if (Number.isInteger(n) && n >= 1 && n <= total) goTo(n - 1);
        return;
      }

      // Esc: clear goto-buffer, then close overview, then exit fullscreen.
      if (e.key === "Escape") {
        if (bufferRef.current) {
          e.preventDefault();
          setBuffer("");
          return;
        }
        if (optsRef.current.overviewOpen) {
          e.preventDefault();
          optsRef.current.onCloseOverview?.();
          return;
        }
        if (document.fullscreenElement) {
          e.preventDefault();
          document.exitFullscreen?.();
        }
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(total - 1);
          break;
        case "f":
        case "F":
          if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
          else document.exitFullscreen?.();
          break;
        case "o":
        case "O":
          e.preventDefault();
          optsRef.current.onToggleOverview?.();
          break;
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, total]);
}
