import { DemoShot, Kicker, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "MCP live query：真的打到實價登錄資料源",
  section: "Demo 1 · Evidence",
  theme: "paper",
};

export const notes = `
### 56. MCP live query：真的打到實價登錄資料源
- 區段：Demo 1 · Evidence
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 1 · Evidence</Kicker>
      <h2>MCP live query：真的打到實價登錄資料源</h2>
      <DemoShot
        src="assets/demos/mcp-live-query.png"
        alt="MCP live query screenshot"
        size="large"
      />
    </>
  );
}
