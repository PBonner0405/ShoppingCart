import items from "./data/mattresses";

export const fetchData = () => {
    const objKeys = Object.keys(items.mattresses);

    return objKeys.map(val => {
        return {
            key: val,
            ...items.mattresses[val]
        }
    });
};
