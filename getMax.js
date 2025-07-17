const getMax = (array) => {
    if (array.length === 0) {
        return null;
    }

    let [max, ...rest] = array;
    for (const item of rest) {
        if (item > max) {
            max = item;
        }
    }

    return max;
};
