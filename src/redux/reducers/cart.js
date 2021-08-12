import { ADD_CART } from "../consts"

const initialState = {
    items: []
}

export const cart = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                items: [...state.items, action.item]
            };
        default:
            return {
                ...state
            }
    }

}