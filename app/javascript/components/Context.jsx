import React, { createContext, useContext, useReducer } from 'react';

const characters = [
  {name: "Da Vinci", x:0.166, y:0.374}, 
  {name: "Kahlo", x:0.895, y:0.2925}, 
  {name: "Picasso", x:0.7875, y:0.944}, 
  {name: "Van Gogh", x:0.145, y:0.824}, 
  {name: "Warhol", x:0.0325, y:0.1625}
];
export const CharacterNames = createContext(["Da Vinci", "Kahlo", "Picasso", "Van Gogh", "Warhol",]);

const FoundNamesContext = createContext([])

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

export function useCharacterNames() {
  return useContext(CharacterNames);
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
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

