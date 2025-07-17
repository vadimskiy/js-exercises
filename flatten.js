// Example of usage:
// flatten([]) // []
// flatten([1, [3, 2], 9]) // [1, 3, 2, 9]
// flatten([1, [[2], [3]], [9]]) // [1, [2], [3], 9]

const flatten = (array) => {
    let result = [];

    if (array.length === 0) {
        return result;
    }

    for (const item of array) {
        if (Array.isArray(item)) {
            result = [...result, ...item];
        } else {
            result = [...result, item];
        }
    }
  return result;
};
