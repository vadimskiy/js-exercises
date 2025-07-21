// Example:
// getMirrorMatrix([
//   [11, 12, 13, 14],
//   [21, 22, 23, 24],
//   [31, 32, 33, 34],
//   [41, 42, 43, 44],
// ])

//  [
//     [11, 12, 12, 11],
//     [21, 22, 22, 21],
//     [31, 32, 32, 31],
//     [41, 42, 42, 41],
//  ]

// Solution 1
const getMirrorMatrix = (matrix) => {
    let result = [];
    for (let i = 0; i < matrix.length; i += 1) {
        let newArray = [];
        for (let j = 0; j < matrix[i].length / 2; j += 1) {
            newArray.push(matrix[i][j]);
        }

        for (let k = matrix[i].length / 2 - 1; k >= 0; k -= 1) {
            newArray.push(matrix[i][k]);
        }

        result.push(newArray);
    }

    return result;
};

// Solution 2
const getMirrorArray = (array) => {
    const size = array.length;
    const mirrored = [];

    for (let i = 0; i < size / 2; i += 1) {
        mirrored[i] = array[i];
        mirrored[size - i - 1] = array[i];
    }

    return mirrored;
};

const getMirrorMatrix2 = (matrix) => {
    const mirroredMatrix = [];

    for (const row of matrix) {
        const mirroredRow = getMirrorArray(row);
        mirroredMatrix.push(mirroredRow);
    }

    return mirroredMatrix;
};
