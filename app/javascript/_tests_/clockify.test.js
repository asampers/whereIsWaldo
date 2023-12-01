import { clockify } from "../utils/clockify";

test("returns correct time", () => {
  expect(clockify(1700)).toBe("00:01:70");
});
