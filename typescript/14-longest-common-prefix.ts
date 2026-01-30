function longestCommonPrefix(strs: string[]): string {
    let stringPrefix = "";

    let amountShortestString = strs[0].length;

    strs.forEach((str) => {
        if (str.length < amountShortestString) {
            amountShortestString = str.length;
        }
    });

    for (let indexLetter = 0; indexLetter < amountShortestString; indexLetter++) {
        const map = new Map();

        strs.forEach((str) => {
            map.set(str[indexLetter], indexLetter);
        });

        if (map.size == 1) {
            stringPrefix += strs[0][indexLetter];
        } else {
            break;
        }
    }

    return stringPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
