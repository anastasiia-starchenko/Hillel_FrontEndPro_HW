const Smiles = ["😀", "😃", "😄", "😁", "😆", "😅"];

export const getMax = (object) => {
    return Object.keys(object).filter(x => {
        return object[x] == Math.max(...Object.values(object));
    });
};

export default Smiles;
