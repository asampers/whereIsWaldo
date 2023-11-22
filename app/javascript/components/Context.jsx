import React, { createContext, useContext, useState, useEffect, useReducer } from 'react';

const FoundNamesContext = createContext()

const FoundNamesDispatchContext = createContext(null);

export function FoundNamesProvider({ children }) {
  const [FoundNames, dispatch] = useReducer(
    foundNamesReducer,
    []
  );

  return (
    <FoundNamesContext.Provider value={FoundNames}>
      <FoundNamesDispatchContext.Provider value={dispatch}>
        {children}
      </FoundNamesDispatchContext.Provider>
    </FoundNamesContext.Provider>
  );
}

export function useFoundNames() {
  return useContext(FoundNamesContext);
}

export function useFoundNamesDispatch() {
  return useContext(FoundNamesDispatchContext);
}

function foundNamesReducer(FoundNames, action) {
  switch (action.type) {
    case 'added': {
      return [...FoundNames, action.nextName];
    }
    case 'clearAll' : {
      return [];
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

