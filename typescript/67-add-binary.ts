function addBinary(a: string, b: string): string {
    const binaryStringWithLongLength = a.length > b.length ? a : b;
    const binaryStringWithShortLength = a.length > b.length ? b : a;
    let result = [];
    let carry = 0;

    for (let i = 0; i < binaryStringWithLongLength.length; i++) {
        const numLong = parseInt(binaryStringWithLongLength[binaryStringWithLongLength.length - 1 - i]);
        const numShort = parseInt(binaryStringWithShortLength[binaryStringWithShortLength.length - 1 - i]);

        const sum = numLong + (numShort ? numShort : 0) + carry;

        if (sum == 0) {
            result.unshift("0");
            carry = 0;
        } else if (sum == 1) {
            result.unshift("1");
            carry = 0;
        } else if (sum == 2) {
            result.unshift("0");
            carry = 1;
        } else if (sum == 3) {
            result.unshift("1");
            carry = 1;
        }
    }

    if (carry) {
        result.unshift("1");
    }
    return result.join("");
}

console.log(addBinary("100", "110010"));
