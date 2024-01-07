import { SET_SEARCH_VALUE, FILTER_POSTS } from "../Types";
import { Product } from "../../data";

interface FilterProductsState {
    searchValue: string;
    filteredProducts: Product[];
    allProducts: Product[];
}

type FilterProductsAction =
    | { type: typeof SET_SEARCH_VALUE; payload: string }
    | { type: typeof FILTER_POSTS; payload: string | Product[] };

const FilterProductsReducer = (state: FilterProductsState, action: FilterProductsAction): FilterProductsState => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            let searchPayload: string = "";
            if (typeof action.payload === 'string') {
                searchPayload = action.payload
            }
            return { ...state, searchValue: searchPayload };
        case FILTER_POSTS:
            const { searchValue } = state;
            let filteredProducts: Product[] = [];

            if (Array.isArray(action.payload) && action.payload.length > 0 && typeof action.payload[0] === 'object') {
                filteredProducts = searchValue !== ""
                    ? (action.payload as Product[]).filter((product: Product) =>
                        product.name.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    : state.allProducts;
            }

            return { ...state, filteredProducts: filteredProducts };

        default:
            return state;
    }
};

export default FilterProductsReducer;
