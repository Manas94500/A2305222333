// /src/logging/LoggerProvider.js
import React, { createContext, useContext } from 'react';
// Replace this import with your pre-built logging middleware
import customLogger from './logger.js';

const LoggerContext = createContext();

export const LoggerProvider = ({ children }) => {
  const log = (event, details) => {
    customLogger.log(event, details); // Mandatory: only use your pre-built logger
  };
  return (
    <LoggerContext.Provider value={{ log }}>
      {children}
    </LoggerContext.Provider>
  );
};

export const useLogger = () => useContext(LoggerContext);
