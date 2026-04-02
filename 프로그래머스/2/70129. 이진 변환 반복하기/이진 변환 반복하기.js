function solution(s) {
    let count = 0;
    let zeroCount = 0;
    while(s !== '1'){
        let list = s.split('');
        let result = list.reduce((acc,cur)=>{if(cur === '1'){acc++}  return acc},0); // 1의개수세기
        let zero = list.length - result //0의개수
        s = result.toString(2); // 1의개수를 이진수로
        count++;
        zeroCount += zero;
    }
    
    return [count,zeroCount];
    
}