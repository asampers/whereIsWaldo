import { getAlertStyling } from "../utils/alertOutcomeHelper.js";

test("returns correct style when character found", () => {
  const { alertType, message, display, style } = getAlertStyling(
    { name: "Kahlo", visible: true },
    { x: 1, y: 2 }
  );
  expect(alertType).toBe("alert-success");
  expect(message).toBe(`You found Kahlo`);
  expect(display).toBe("");
  expect(style).toEqual({ left: "1px", position: "absolute", top: "2px" });
});

test("returns correct style when character NOT found", () => {
  const { alertType, message, display, style } = getAlertStyling(
    { name: "", visible: true },
    { x: 1, y: 2 }
  );
  expect(alertType).toBe("alert-danger");
  expect(message).toBe(`Ope, try again!`);
  expect(display).toBe("");
  expect(style).toEqual({ left: "1px", position: "absolute", top: "2px" });
});
