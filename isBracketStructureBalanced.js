// Example of usage:
// isBracketStructureBalanced('(>') // false
// isBracketStructureBalanced('()') // true
// isBracketStructureBalanced('[()]') // true
// isBracketStructureBalanced('({}[])') // true
// isBracketStructureBalanced('{<>}}') // false
// isBracketStructureBalanced('([)]') // false

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isOpeningSymbol = symbol => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => {
    for (let i = 0; i < closingSymbols.length; i += 1) {
        if (openingSymbols[i] === symbol) {
            return closingSymbols[i];
        }
    }
    return null;
};

const isBracketStructureBalanced = (string) => {
    const stack = [];
    for (const symbol of string) {
        if (isOpeningSymbol(symbol)) {
            const closingSymbol = getClosingSymbolFor(symbol);
            stack.push(closingSymbol);
        } else {
            const lastSavedSymbol = stack.pop();
            if (symbol !== lastSavedSymbol) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
