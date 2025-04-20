import { it, expect, describe, beforeEach, vi } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../../src/components/Form";
import "@testing-library/jest-dom/vitest";
import React from "react";

describe("Form Component", () => {
  beforeEach(() => {
    render(<Form />);
  });

  describe("Rendering", () => {
    it("should render the form container with proper styling", () => {
      const container = screen.getByTestId("form-container");
      expect(container).toBeInTheDocument();
      expect(container).toHaveClass("w-[400px]");
      expect(container).toHaveClass("border");
      expect(container).toHaveClass("rounded-md");
    });

    it("should render a form element with proper attributes", () => {
      const form = screen.getByTestId("form");
      expect(form).toBeInTheDocument();
      expect(form.tagName).toBe("FORM");
      expect(form).toHaveClass("space-y-3");
    });
  });

  describe("Form Inputs", () => {
    it("should render email input with correct attributes", () => {
      const emailInput = screen.getByRole("textbox", { name: /email/i });
      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveAttribute("type", "email");
      expect(emailInput).toHaveAttribute("id", "email");
      expect(emailInput).toHaveAttribute("name", "email");
      expect(emailInput).toHaveClass("border", "rounded-md", "w-full");
    });

    it("should render password input with correct attributes", () => {
      // Password inputs don't have a standard role, so we use getById
      const passwordInput = screen.getByLabelText(/password/i);
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput).toHaveAttribute("type", "password");
      expect(passwordInput).toHaveAttribute("id", "password");
      expect(passwordInput).toHaveAttribute("name", "password");
      expect(passwordInput).toHaveClass("border", "rounded-md", "w-full");
    });

    it("should render login button with correct attributes", () => {
      const button = screen.getByTestId("login-btn");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Login");
      expect(button).toHaveAttribute("role", "button");
      expect(button).toHaveAttribute("type", "submit");
      expect(button).toHaveClass("bg-blue-500", "text-white", "rounded-md");
    });
  });

  describe("Form Structure", () => {
    it("should have all fields inside the form element", () => {
      const form = screen.getByTestId("form");
      const emailInput = screen.getByRole("textbox", { name: /email/i });
      const passwordInput = document.getElementById("password");
      const button = within(form).getByRole("button", { name: /login/i });

      expect(form).toContainElement(emailInput);
      expect(form).toContainElement(passwordInput);
      expect(form).toContainElement(button);
    });

    it("should have properly associated labels with inputs", () => {
      const emailLabel = screen.getByText("Email");
      const passwordLabel = screen.getByText("Password");

      expect(emailLabel).toHaveAttribute("for", "email");
      expect(passwordLabel).toHaveAttribute("for", "password");
    });
  });

  describe("User Interactions", () => {
    it("should allow typing in email field", async () => {
      const user = userEvent.setup();
      const emailInput = screen.getByRole("textbox", { name: /email/i });

      await user.type(emailInput, "test@example.com");
      expect(emailInput).toHaveValue("test@example.com");
    });

    it("should allow typing in password field", async () => {
      const user = userEvent.setup();
      const passwordInput = document.getElementById("password")!;

      await user.type(passwordInput, "password123");
      expect(passwordInput).toHaveValue("password123");
    });

    it("should trigger form submission when login button is clicked", () => {
      const form = screen.getByTestId("form");
      const mockSubmit = vi.fn((e) => e.preventDefault());
      form.onsubmit = mockSubmit;

      const button = screen.getByTestId("login-btn");
      fireEvent.click(button);

      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("should have accessible form controls", () => {
      const emailInput = screen.getByRole("textbox", { name: /email/i });
      const passwordInput = document.getElementById("password");

      expect(emailInput).toHaveAttribute("aria-labelledby", "email-label");
      expect(passwordInput).toHaveAttribute(
        "aria-labelledby",
        "password-label"
      );

      // Verify label IDs exist
      expect(document.getElementById("email-label")).toBeInTheDocument();
      expect(document.getElementById("password-label")).toBeInTheDocument();
    });
  });
});
