import React, {
  useReducer,
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
} from "react";
import { Character } from "../models/Character";

export interface CharacterState {
  /**
   * Put all you data in here. You lots of data in here or you can have multiple contexts
   */
  characters: Character[];
}

/**
 * This is the structure of the context. I've opted to use a state / setState pattern where you can set a partial state
 */

export interface CharacterContextProps {
  state: CharacterState;
  setState: React.Dispatch<Partial<CharacterState>>;
}

/**
 * Here we tell React to create a context class. I can we used to create a context or fetch data from it
 */
export const CharacterContext = createContext<CharacterContextProps>(
  {} as CharacterContextProps
);

/**
 * This is how we set a partial state. No touching ^^
 */
function stateReducer(
  state: CharacterState,
  newState: Partial<CharacterState>
) {
  return { ...state, ...newState };
}

/**
 * The provider should wrap everything that needs access to this data. If it's completely
 * global you can have it wrap everything in App.tsx
 */
export const CharacterContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, setState] = useReducer(stateReducer, {
    /**
     * Default values goes here
     */
    characters: [],
  });

  return (
    <CharacterContext.Provider value={{ state, setState }}>
      {children}
    </CharacterContext.Provider>
  );
};

/**
 * A hook for easier usage
 */

export function useCharacter(): [
  CharacterState,
  React.Dispatch<Partial<CharacterState>>
] {
  const characterContext = useContext(CharacterContext);

  if (!characterContext) {
    throw "No provider for Character context";
  }

  return [characterContext.state, characterContext.setState];
}
