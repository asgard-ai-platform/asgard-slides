import { DemoShot, Kicker, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "Plugin routing：workflow 與 skills 被組成可攜資產",
  section: "Demo 2 · Evidence",
  theme: "light",
};

export const notes = `
### 62. Plugin routing：workflow 與 skills 被組成可攜資產
- 區段：Demo 2 · Evidence
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 2 · Evidence</Kicker>
      <h2>Plugin routing：workflow 與 skills 被組成可攜資產</h2>
      <DemoShot
        src="/assets/demos/plugin-routing.png"
        alt="Plugin routing screenshot"
        size="large"
      />
    </>
  );
}
