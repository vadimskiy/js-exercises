// Check the same parity

// Examples:

// sameParity([-1, 0, 1, -3, 10, -2]); // [-1, 1, -3]
// sameParity([2, 0, 1, -3, 10, -2]); // [2, 0, 10, -2]
// sameParity([]); // []

const isSameParity = (item1, item2) => (Math.abs(item1) % 2 === Math.abs(item2) % 2)

const sameParity = (array) => {
    const [firstItem] = array;
    return array.filter((item) => isSameParity(firstItem, item));
};
