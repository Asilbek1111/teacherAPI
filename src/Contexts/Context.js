import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [teacherId, setteacherId] = useState('');
  
  return (
    <MyContext.Provider value={{teacherId, setteacherId }}>
      {children}
    </MyContext.Provider>
  );
};