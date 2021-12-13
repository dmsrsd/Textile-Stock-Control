import React, { createContext, useReducer, useContext } from "react";
import { object, func } from "prop-types";

const Context = createContext();

export function AppStateProvider({ reducer, initiateState = {}, children }) {
  const value = useReducer(reducer, initiateState);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

AppStateProvider.propTypes = {
  reducer: func,
  initiateState: object,
};

export function useAppState() {
  return useContext(Context);
}
