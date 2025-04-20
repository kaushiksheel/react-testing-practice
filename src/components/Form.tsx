import React from "react";

const Form = () => {
  return (
    <div
      data-testid="form-container"
      className="w-[400px] rounded-md border border-gray-700 p-2"
    >
      <form data-testid="form" className="space-y-3">
        <div className="space-y-1">
          <label htmlFor="email" id="email-label" className="inline-block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            aria-labelledby="email-label"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="password"
            id="password-label"
            className="inline-block"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="border rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            aria-labelledby="password-label"
          />
        </div>
        <button
          data-testid="login-btn"
          type="submit"
          role="button"
          className="w-full text-center py-2 text-white cursor-pointer bg-blue-500 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
