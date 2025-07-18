// Example:
// isContinuousSequence([10, 11, 12, 13]) // true
// isContinuousSequence([-5, -4, -3]) // true

// isContinuousSequence([10, 11, 12, 14, 15]) // false
// isContinuousSequence([1, 2, 2, 3]) // false
// isContinuousSequence([7]) // false
// isContinuousSequence([]) // false

const isContinuousSequence = (array) => {
    const arrayLength = array.length;
    if (arrayLength <= 1) {
        return false;
    }

    const start =array[0];
    for (let i = 1; i < arrayLength; i += 1) {
        if (start + i !== array[i]) {
            return false;
        }
    }
    return true;
};
