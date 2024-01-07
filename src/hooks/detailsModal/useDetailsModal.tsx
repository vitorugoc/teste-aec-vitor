import { useContext } from "react";

import { DetailsModalContext } from "../../context/detailsModal/DetailsModalContext";

export const useDetailsModal = () => {
    const context = useContext(DetailsModalContext);
    return context || {isModalOpen: "", changeDetailModalVisibility: () => {},};
};
