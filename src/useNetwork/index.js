import React, { useState, useEffect } from "react"

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
}

export const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? "We Just Went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{onLine ? "OnLine" : "Offline"}</h1>
    </div>
  )
}