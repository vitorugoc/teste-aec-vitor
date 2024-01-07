import { CHANGE_DETAIL_MODAL_VISIBILITY } from "../Types";

interface DetailsModalState {
  isModalOpen: boolean;
}

type DetailsModalAction =
  | { type: typeof CHANGE_DETAIL_MODAL_VISIBILITY;}


const DetailsModalReducer = (state: DetailsModalState, action: DetailsModalAction): DetailsModalState => {
  switch (action.type) {
    case CHANGE_DETAIL_MODAL_VISIBILITY:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    default:
      return state;
  }
};

export default DetailsModalReducer;
