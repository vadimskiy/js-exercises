// Example of usage:
// getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]) // [10, 24]
// getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]) // []
// getIntersectionOfSortedArrays([], [2]) // []

const getIntersectionOfSortedArrays = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let k = 0;
    while (i < arr1.length && k < arr2.length) {
        const lastCommon = result.at(-1);
        if (arr1[i] === arr2[k] && arr1[i] !== lastCommon) {
            result.push(arr1[i]);
            i += 1;
            k += 1;
        } else if (arr1[i] > arr2[k]) {
            k += 1;
        } else {
            i += 1;
        }
    }
    return result;
};
