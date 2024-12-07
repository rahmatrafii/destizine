"use client";
import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export const langContext = createContext<{
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}>({
  showNav: false,
  setShowNav: () => {},
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <langContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </langContext.Provider>
  );
};
export default ContextProvider;
