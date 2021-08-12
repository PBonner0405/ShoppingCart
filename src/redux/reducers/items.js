import { SAVE_ITEMS } from "../consts"

const initialState = {
    items: [],
    selected: null
}

export const items = (state = initialState, action) => {

    switch (action.type) {
        case SAVE_ITEMS:
            return {
                ...state,
                items: [...state.items, ...action.items]
            };
        default:
            return {
                ...state
            }
    }

}