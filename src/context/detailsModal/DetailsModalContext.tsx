import { createContext, ReactNode, useReducer } from "react";

import { SET_IS_MODAL_OPEN } from "../Types";
import DetailsModalReducer from "./DetailsModalReducer";

interface DetailsModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
}

export const DetailsModalContext = createContext<DetailsModalContextProps | undefined>(undefined);

const DetailsModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: DetailsModalContextProps = {
    isModalOpen: false,
    setIsModalOpen: () => {},
  };

  const [state, dispatch] = useReducer(DetailsModalReducer, initialState);

  const setIsModalOpen = (): void => {
    dispatch({ type: SET_IS_MODAL_OPEN });
  };

  return (
    <DetailsModalContext.Provider
      value={{
        isModalOpen: state.isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </DetailsModalContext.Provider>
  );
};

export default DetailsModalProvider;
