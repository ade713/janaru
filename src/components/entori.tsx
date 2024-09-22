import React from "react";

type EntoriProps = {
  date: string;
  content: string;
};

export function Entori({ date, content }: EntoriProps) {
  return (
    <div className="my-4 border-solid border-2 rounded-md border-green-900/40 p-3 bg-yellow-100">
      <h3 className="mb-2 border-b border-green-900/40">{date}</h3>
      <p>{content}</p>
    </div>
  );
}
