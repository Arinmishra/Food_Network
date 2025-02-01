import sum from "../utils/sum";

test("Should give sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
