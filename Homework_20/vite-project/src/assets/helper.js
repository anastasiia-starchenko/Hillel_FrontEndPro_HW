const Smiles = ["😀", "😃", "😄", "😁", "😆", "😅"];

export const getMax = (object) => {
    return Object.keys(object).filter(x => {
        return object[x] == Math.max.apply(null, Object.values(object));
    });
};

export default Smiles;
