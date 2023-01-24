import { mult } from "./01";

test("Mult correct", () => {
  const a = 2;
  const b = 2;
  const c = 5;

  const result1 = mult(a, b);
  const result2 = mult(a, c);

  expect(result1).toBe(4);
  expect(result2).toBe(10);
});
