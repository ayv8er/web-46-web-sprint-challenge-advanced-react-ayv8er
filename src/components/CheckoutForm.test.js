import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name:/i);
  userEvent.type(firstNameInput, "Richard");

  const submit = screen.getByRole("button");
  userEvent.click(submit);

  const successMessage = screen.queryByTestId("successMessage");
  expect(successMessage).toBeInTheDocument();
});
