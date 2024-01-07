import { SET_IS_MODAL_OPEN } from "../Types";

interface DetailsModalState {
  isModalOpen: boolean;
}

type DetailsModalAction =
  | { type: typeof SET_IS_MODAL_OPEN;}


const DetailsModalReducer = (state: DetailsModalState, action: DetailsModalAction): DetailsModalState => {
  switch (action.type) {
    case SET_IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    default:
      return state;
  }
};

export default DetailsModalReducer;
