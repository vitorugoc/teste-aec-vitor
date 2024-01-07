import { createContext, ReactNode, useReducer } from "react";

import { CHANGE_DETAIL_MODAL_VISIBILITY } from "../Types";
import DetailsModalReducer from "./DetailsModalReducer";

interface DetailsModalContextProps {
  isModalOpen: boolean;
  changeDetailModalVisibility: () => void;
}

export const DetailsModalContext = createContext<DetailsModalContextProps | undefined>(undefined);

const DetailsModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: DetailsModalContextProps = {
    isModalOpen: false,
    changeDetailModalVisibility: () => {},
  };

  const [state, dispatch] = useReducer(DetailsModalReducer, initialState);

  const changeDetailModalVisibility = (): void => {
    dispatch({ type: CHANGE_DETAIL_MODAL_VISIBILITY });
  };

  return (
    <DetailsModalContext.Provider
      value={{
        isModalOpen: state.isModalOpen,
        changeDetailModalVisibility,
      }}
    >
      {children}
    </DetailsModalContext.Provider>
  );
};

export default DetailsModalProvider;
