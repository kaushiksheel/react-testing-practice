import React from "react";

const Form = () => {
  return (
    <div className="w-[400px]  rounded-md border border-gray-700 p-2">
      <form className="space-y-3">
        <div className="space-y-1">
          <label htmlFor="email" className="inline-block">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="inline-block">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border rounded-md w-full p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button className="w-full text-center py-2 text-white cursor-pointer bg-blue-500 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
