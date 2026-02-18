function lengthOfLastWord(s: string): number {
    s = s.trim();

    return s.split(" ")[s.split(" ").length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
