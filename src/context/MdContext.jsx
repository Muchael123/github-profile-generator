import React, { createContext, useState } from "react";

export const MdContext = createContext();


export const MdProvider = ({ children }) => {
  const [details, setDetails] = useState({});
  const [generatedMd, setGeneratedMd] = useState("");

  const handleChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setGeneratedMd(`# ${details.name || ""}`); // Use updated details
  };

  return (
    <MdContext.Provider value={{ details, generatedMd, handleChange }}>
      {children}
    </MdContext.Provider>
  );
};
