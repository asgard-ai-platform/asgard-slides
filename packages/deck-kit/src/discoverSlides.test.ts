import { describe, it, expect } from "vitest";
import { assertSequentialPrefixes } from "./discoverSlides";

describe("assertSequentialPrefixes", () => {
  it("accepts unique sequential ids starting at 01", () => {
    expect(() => assertSequentialPrefixes(["01-a", "02-b", "03-c"])).not.toThrow();
  });

  it("throws on duplicate prefix", () => {
    expect(() => assertSequentialPrefixes(["01-a", "01-b", "02-c"]))
      .toThrow(/duplicate/i);
  });

  it("throws on a missing prefix in the sequence", () => {
    expect(() => assertSequentialPrefixes(["01-a", "03-c"]))
      .toThrow(/missing/i);
  });

  it("throws when the sequence does not start at 01", () => {
    expect(() => assertSequentialPrefixes(["02-a", "03-b"]))
      .toThrow(/start.*01/i);
  });

  it("accepts an empty list (zero slides)", () => {
    expect(() => assertSequentialPrefixes([])).not.toThrow();
  });
});
