import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";


const UseTitle = initialTitle => {
  const [title, setTitle ] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
}

export const App = () => {
  const titleUpdater = UseTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div> 
    </div>
  );
};