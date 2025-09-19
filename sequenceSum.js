
// Calculate sequence sum 

// Examples:
// sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
// sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
// sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
// sequenceSum(7, 2); // NaN - empty sequence
// sequenceSum(0, 0); // 0 
// sequenceSum(6, 6); // 6

const sequenceSum = (begin, end) => {
    if (begin > end) {
        return NaN
    }

    if (begin === end) {
        return begin
    }

    return begin + sequenceSum(begin + 1, end)
}
