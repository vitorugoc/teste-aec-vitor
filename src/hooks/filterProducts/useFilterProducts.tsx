import { useContext } from "react";
import { FilterProductsContext } from "../../context/filterPosts/FilterProductsContext";

import products from "../../data";

export const useFilterProducts = () => {
    const context = useContext(FilterProductsContext);
    return context || {searchValue: "", filteredProducts: [], allProducts: products, setSearchValue: () => {}, filterProducts: () => {},};
};
