//두글자씩 끊기. 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다.
function makingSet(str){
    const isAlphabet = (str) => /^[a-zA-Z]+$/.test(str);
    str = str.toUpperCase().split('');
    let list = [];
    
    for(i=0; i<str.length-1; i++){
        if(isAlphabet(str[i]) && isAlphabet(str[i+1]))
            list.push(`${str[i]}${str[i+1]}`)
    }
    return list
} 
function solution(str1, str2) {
    //J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값
    //모두 공집합일 경우 J(A, B) = 1
    let list1 = makingSet(str1);
    let list2 = makingSet(str2);
    
    if(list1.length === 0 && list2.length === 0) return 65536;

    //교집합과 합집합 구하기
    let union = 0;
    let inter = 0;
    
    for(item of list1){
        if (list2.includes(item)){ //교집합요소이면
            let idx = list2.indexOf(item);
            list2.splice(idx,1);
            union++;
            inter++;
        }else{ //교집합 요소가 아니면
            union++;
        }
        console.log(item, inter, union)
    }
    
    union += list2.length;
    console.log(inter, union, list2)
    
    return Math.floor(inter/union * 65536);
}

