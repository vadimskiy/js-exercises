// Examples:
// chunk(['a', 'b', 'c', 'd'], 2) // [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]

// Solution 1
const chunk = (array, chunkSize) => {
    let result = [];
    const arrayLength = array.length;
    let chunk = [];
    for (let i = 0; i < arrayLength; i += 1) {
        chunk.push(array[i]);
        if (chunk.length === chunkSize || i === arrayLength - 1) {
            result.push(chunk);
            chunk = [];
        }
    }
    return result;
};

//Solution 2
const chunk2 = (array, chunkSize) => {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }

    return result;
};
