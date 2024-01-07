import { createContext, ReactNode, useReducer } from "react";
import FilterPostsReducer from "./FilterPostsReducer";

import { Product } from "../../data";
import { SET_SEARCH_VALUE, FILTER_POSTS } from "../Types";

interface FilterPostsContextProps {
    searchValue: string;
    filteredPosts: Product[];
    setSearchValue: (searchValue: string) => void;
    filterPosts: (post: Product[]) => void;
}

export const FilterPostsContext = createContext<FilterPostsContextProps | undefined>(undefined);

const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const initialState: FilterPostsContextProps = {
        searchValue: "",
        filteredPosts: [],
        setSearchValue: (searchValue: string) => { },
        filterPosts: (item: Product[]) => { },
    };

    const [state, dispatch] = useReducer(FilterPostsReducer, initialState);

    const setSearchValue = (searchValue: string): void => {
        dispatch({ type: SET_SEARCH_VALUE, payload: searchValue });
    };

    const filterPosts = (post: Product[]): void => {
        dispatch({ type: FILTER_POSTS, payload: post });
    };

    return (
        <FilterPostsContext.Provider
            value={{
                searchValue: state.searchValue,
                filteredPosts: state.filteredPosts,
                setSearchValue,
                filterPosts,
            }}
        >
            {children}
        </FilterPostsContext.Provider>
    );
};

export default FilterProvider;
