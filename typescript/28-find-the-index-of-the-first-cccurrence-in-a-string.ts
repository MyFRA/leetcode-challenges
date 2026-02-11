function strStr(haystack: string, needle: string): number {
    let index = -1;

    for (let i = 0; i < haystack.length - (needle.length - 1); i++) {
        if (haystack.substring(i, needle.length + i) == needle) {
            index = i;
            break;
        }
    }

    return index;
}

console.log(strStr("sadbutsad", "sad"));
