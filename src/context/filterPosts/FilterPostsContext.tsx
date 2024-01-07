import { createContext, ReactNode, useReducer } from "react";
import FilterProductsReducer from "./FilterProductsReducer";

import { Product } from "../../data";
import { SET_SEARCH_VALUE, FILTER_POSTS } from "../Types";
import products from "../../data";

interface FilterProductsContextProps {
    searchValue: string;
    filteredProducts: Product[];
    allProducts: Product[];
    setSearchValue: (searchValue: string) => void;
    filterProducts: () => void;
}

export const FilterProductsContext = createContext<FilterProductsContextProps | undefined>(undefined);

const FilterProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const initialState: FilterProductsContextProps = {
        searchValue: "",
        filteredProducts: [],
        allProducts: products,
        setSearchValue: (searchValue: string) => { },
        filterProducts: () => { },
    };

    const [state, dispatch] = useReducer(FilterProductsReducer, initialState);

    const setSearchValue = (searchValue: string): void => {
        dispatch({ type: SET_SEARCH_VALUE, payload: searchValue });
    };

    const filterProducts = (): void => {
        dispatch({ type: FILTER_POSTS, payload: null });
    };

    return (
        <FilterProductsContext.Provider
            value={{
                searchValue: state.searchValue,
                filteredProducts: state.filteredProducts,
                allProducts: state.allProducts,
                setSearchValue,
                filterProducts,
            }}
        >
            {children}
        </FilterProductsContext.Provider>
    );
};

export default FilterProductsProvider;
