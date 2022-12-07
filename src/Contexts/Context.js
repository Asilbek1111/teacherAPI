import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [teacherId, setteacherId] = useState('');
  const [study, setStudy] = useState([])
  const [fieldId, setFieldId] = useState([])
  
  return (
    <MyContext.Provider
      value={{ teacherId, setteacherId, study, setStudy, fieldId, setFieldId }}
    >
      {children}
    </MyContext.Provider>
  );
};