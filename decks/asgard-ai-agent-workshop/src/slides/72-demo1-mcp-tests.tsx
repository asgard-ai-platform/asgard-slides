import { DemoShot, Kicker, type SlideMeta } from "deck-kit";

export const meta: SlideMeta = {
  title: "MCP server 測試畫面：connector 要能工程驗收",
  section: "Demo 1 · Explanation",
  theme: "light",
};

export const notes = `
### 57. MCP server 測試畫面：connector 要能工程驗收
- 區段：Demo 1 · Explanation
`;

export default function Slide() {
  return (
    <>
      <Kicker>Demo 1 · Explanation</Kicker>
      <h2>MCP server 測試畫面：connector 要能工程驗收</h2>
      <DemoShot
        src="/assets/demos/mcp-tests.png"
        alt="MCP package tests screenshot"
        size="medium"
      />
    </>
  );
}
