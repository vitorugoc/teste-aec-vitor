import { useContext } from "react";
import { FilterPostsContext } from "../../context/filterPosts/FilterPostsContext";

export const useFilterPosts = () => {
    const context = useContext(FilterPostsContext);
    return context || {searchValue: "", filteredPosts: [], setSearchValue: () => {}, filterPosts: () => {},};
};
