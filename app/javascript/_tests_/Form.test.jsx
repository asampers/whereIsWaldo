import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../components/Form";

describe("Form component", () => {
  const user = userEvent.setup();
  const name = "Test_Name";
  const time = 1700;
  const onSubmit = jest.fn();

  test("submits name and time", async () => {
    render(<Form submit={onSubmit} time={time} />);
    screen.getByRole("button", { name: /Record Score/i }).onsubmit = onSubmit;
    await user.type(screen.getByRole("textbox", { name: "" }), name);

    await user.click(screen.getByRole("button", { name: /Record Score/i }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
