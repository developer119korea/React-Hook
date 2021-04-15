import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    console.log("fireNotif");
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  }
  return fireNotif;
};

export const App = () => {
  const triggerNotif = useNotification("Can i steal your BMW", { body: "I Love BMW. dont you?" });
  console.log(triggerNotif);
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};