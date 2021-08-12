import {
    SAVE_ITEMS,
} from '../consts';

const saveItems = (items) => {
    return {
        items,
        type: SAVE_ITEMS
    }
}

const itemActions = {
    saveItems
};

export default itemActions;