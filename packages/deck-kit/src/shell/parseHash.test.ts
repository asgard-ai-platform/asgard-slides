import { describe, it, expect } from "vitest";
import { parseHash } from "./parseHash";

describe("parseHash", () => {
  it("returns 0 for empty hash", () => {
    expect(parseHash("", 10)).toBe(0);
  });
  it("returns 0 for non-numeric hash", () => {
    expect(parseHash("#about", 10)).toBe(0);
  });
  it("returns 0 for hash less than 1", () => {
    expect(parseHash("#0", 10)).toBe(0);
  });
  it("converts #1 to index 0", () => {
    expect(parseHash("#1", 10)).toBe(0);
  });
  it("converts #13 to index 12", () => {
    expect(parseHash("#13", 77)).toBe(12);
  });
  it("clamps hash above total to last index", () => {
    expect(parseHash("#999", 10)).toBe(9);
  });
  it("returns 0 if total is 0", () => {
    expect(parseHash("#5", 0)).toBe(0);
  });
});
