import React from "react";
import { useInput } from "./useInput";

export const App = () => {
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
