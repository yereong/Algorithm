function solution(n) {
    const num = [0];
    for ( i = 1; i < n+1; i++){
        if ( n % i == 0 ){
            num.push(i);
        }
    }
    return num.reduce((a,b) => a+b )
}