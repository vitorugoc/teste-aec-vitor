import { useContext } from "react";
import { FilterProductsContext } from "../../context/filterPosts/FilterPostsContext";

export const useFilterProducts = () => {
    const context = useContext(FilterProductsContext);
    return context || {searchValue: "", filteredPosts: [], setSearchValue: () => {}, filterProducts: () => {},};
};
