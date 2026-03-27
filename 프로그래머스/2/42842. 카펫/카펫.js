function solution(brown, yellow) {
    const sum = brown + yellow;

    for (let i = 3; i <= sum; i++) {
        if (sum % i === 0) {
            let j = sum / i;

            if ((i - 2) * (j - 2) === yellow) {
                return [j, i];
            }
        }
    }
}
