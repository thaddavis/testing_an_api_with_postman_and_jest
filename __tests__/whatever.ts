import { describe, expect, test } from "@jest/globals";
import { addition } from "../src/addition";

describe("testing addition module", () => {
  test("2 + 2 = 4", async () => {
    const sum = addition(2, 2);

    expect(sum).toBe(4);
  });

  test("2 + 2 = 5", async () => {
    const sum = addition(2, 2);

    expect(sum).not.toBe(5);
  });

  test("1 + 2 = 3", async () => {
    const sum = addition(1, 2);

    expect(sum).toBe(3);
  });
});
