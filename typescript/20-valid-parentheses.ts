function isValid(s: string): boolean {
    const strInvalids = [];

    for (let index = 0; index < s.length; index++) {
        if (isOpenSymbols(s[index])) {
            strInvalids.push(s[index]);
        } else if (isCloseSymbols(s[index])) {
            const indexMatch = strInvalids.findLastIndex((e) => e == getSymbolMatch(s[index]));
            if (indexMatch < 0) {
                return false;
            } else {
                if (getAllOpenSymbols().includes(strInvalids[strInvalids.length - 1]) && strInvalids[strInvalids.length - 1] != getSymbolMatch(s[index])) {
                    return false;
                } else {
                    strInvalids.splice(indexMatch, 1);
                }
            }
        }
    }

    return strInvalids.length == 0;
}

function getSymbolMatch(sym: string): string {
    if (sym == "(") {
        return ")";
    } else if (sym == ")") {
        return "(";
    } else if (sym == "{") {
        return "}";
    } else if (sym == "}") {
        return "{";
    } else if (sym == "[") {
        return "]";
    } else if (sym == "]") {
        return "[";
    }

    return "";
}

function isOpenSymbols(s: string) {
    return ["[", "{", "("].includes(s);
}

function getAllOpenSymbols() {
    return ["[", "{", "("];
}

function isCloseSymbols(s: string) {
    return ["]", "}", ")"].includes(s);
}

console.log(isValid("[([]])"));
