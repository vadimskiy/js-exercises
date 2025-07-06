export const bubbleSort = (array) => {
    let stepsCounter = array.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
        stepsCounter -= 1;
    } while (swapped);
    return array;
};
