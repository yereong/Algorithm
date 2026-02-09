function solution(n, m) {
    return [gcd(Math.max(n,m),Math.min(n,m)), n * m /gcd(Math.max(n,m),Math.min(n,m)) ]
}

function gcd(a,b){
    while ( a%b !== 0){
        let temp = a%b
        a = b;
        b = temp;
    }
    return b;
}
