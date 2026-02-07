function solution(price, money, count) {
    let total = 0;
    for (i = 1; i < count+1; i++){ total += i}
    return money > price * total ? 0 :  price * total - money
}