import React from "react";

type SubmitButtonProps = {
  children: React.ReactNode;
};

export function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button
      className="transition duration-300 border border-green-950 bg-orange-500  rounded-2xl p-2 shadow hover:shadow-2xl hover:bg-orange-600/90 hover:border-2"
      type="submit"
    >
      {children}
    </button>
  );
}
