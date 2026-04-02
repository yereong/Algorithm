function fib(n){
    let prev = 0;
    let cur = 1;
    for(i=2; i<=n; i++){
        let temp = cur;
        cur = (prev%1234567 + cur%1234567) % 1234567;
        prev = temp;
    }
    return cur;
}


function solution(n) {

    return fib(n)
}
