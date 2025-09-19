
// Find smallest divisor with recursion. Use iterative approach

// Examples:
// smallestDivisor(10); // 2 => 10 % 2 === 0
// smallestDivisor(15); // 3 => 15 % 3 === 0
// smallestDivisor(17); // 17 => 17 % 17 === 0


const smallestDivisor = (x) => {
    if (x === 1) {
        return 1;
    }

    const iter = (y) => {
        if (x % y === 0) {
            return y;
        }

        return iter(y + 1)
    };

    return iter(2);
};
