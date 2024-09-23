import React from "react";
import { SubmitButton } from "./submit-button";
import { logIn, signUp } from "@/actions/actions";

type AuthFormProps = {
  formType: string;
};

export function AuthForm({ formType }: AuthFormProps) {
  const buttonText = formType === "login" ? "Login" : "Sign Up";

  return (
    <form className="w-72" action={formType === "login" ? logIn : signUp}>
      {formType === "signup" ? (
        <div className="flex flex-col mb-3">
          <label htmlFor="name">Name</label>
          <input
            className="border border-green-900 rounded-md p-1 mt-1 bg-yellow-100"
            id="name"
            type="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
      ) : null}
      <div className="flex flex-col mb-3">
        <label htmlFor="email">Email</label>
        <input
          className="border border-green-900 rounded-md p-1 mt-1 bg-yellow-100"
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="password">Password</label>
        <input
          className="border border-green-900 rounded-md p-1 mt-1 bg-yellow-100"
          id="password"
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
      </div>
      <SubmitButton>{buttonText}</SubmitButton>
    </form>
  );
}
