import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("render form fields and button", () => {
    render(<LoginForm />);
    expect(screen.getByText("Login Form")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("allows user to type into inputs", async () => {
    render(<LoginForm />);
    const user = userEvent.setup();

    const emailInput = screen.getByPlaceholderText("email");
    const passwordInput = screen.getByPlaceholderText("password");

    await user.type(emailInput, "test@email.com");
    await user.type(passwordInput, "123456");

    expect(emailInput).toHaveValue("test@email.com");
    expect(passwordInput).toHaveValue("123456");
  });

  test("show success msg after submit", async () => {
    render(<LoginForm />);
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText("Form Submitted")).toBeInTheDocument();
  });
});
