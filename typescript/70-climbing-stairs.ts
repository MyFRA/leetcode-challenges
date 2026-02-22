function climbStairs(n: number): number {
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else {
        return fibonacci(n + 1);
    }
}

function fibonacci(n: number) {
    if (n <= 1) return n;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

console.log(climbStairs(3));
