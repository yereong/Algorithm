function solution(n, k) {
    // n을 k진수로 바꾸기
    let 변환된수 = 진수변환(n,k);
    // 0을 기준으로 split하기
     let 숫자배열 = 변환된수.split('0');
    // 배열을 돌면서 소수인지 확인 및 카운팅
     let answer = 0;
    for(let i=0; i < 숫자배열.length; i++){
        if(숫자배열[i] === '1' || 숫자배열[i] === ''){
           continue;
         }
         else if (소수인지(Number(숫자배열[i]))){
             answer++;
         }
     }
    
     return answer;
}

// k진수로 바꾸는 함수
function 진수변환(n,k) {
    let i = n;
    let list = [];
    while(i !== 0){
        list.push(i%k);
        i = Math.floor(i/k);
    }
    let numlist = list.reverse();
    return numlist.join('');
}

// 소수인지 아닌지 판별하는 함수
function 소수인지(n) {
    for(i=2; i<=Math.sqrt(n); i++){
        if (n%i === 0){
            return false
        }
        continue;
    }
    return true;
}