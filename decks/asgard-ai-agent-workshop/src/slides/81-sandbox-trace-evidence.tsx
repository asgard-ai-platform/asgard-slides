import { DemoShot, Kicker, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Sandbox trace：畫面要看 agent 實際做了哪些事",
  section: "Demo 3 · Evidence",
  theme: "paper",
};

export const notes = `
### 66. Sandbox trace：畫面要看 agent 實際做了哪些事
- 區段：Demo 3 · Evidence
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 3 · Evidence</Kicker>
      <h2>Sandbox trace：畫面要看 agent 實際做了哪些事</h2>
      <DemoShot
        src="assets/demos/sandbox-trace.png"
        alt="Sandbox agent trace screenshot"
        size="large"
      />
    </>
  );
}
