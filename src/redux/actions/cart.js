import {
    ADD_CART,
} from '../consts';

const addCart = (item) => {
    return {
        item,
        type: ADD_CART
    }
}

const cartActions = {
    addCart
};

export default cartActions;