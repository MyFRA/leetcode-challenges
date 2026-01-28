function isPalindrome(x: number): boolean {
    return x.toString().toLowerCase() == x.toString().split("").reverse().join("").toLowerCase();
}
