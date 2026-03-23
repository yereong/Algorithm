function solution(n, arr1, arr2) {
    let answer = [];
    for (i =0; i<n; i++){
        let string = (arr1[i] | arr2[i]).toString(2).padStart(n,0);
        console.log(string);
        let parseS = string.split('').map((v)=>v === "1"? v='#' : v=' ').join('')
        answer.push(parseS);
    }
    return answer;
}