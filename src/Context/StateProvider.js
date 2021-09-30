/* eslint-disable react/prop-types */
import React, { createContext, useContext, useReducer } from 'react';

// Data layer Prep
export const StateContext = createContext();

// Wrap  app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
