function solution(arr1, arr2) {
    //빈배열 만들기
    let answer = [];
    for(i=0;i<arr1.length;i++){
        answer.push(new Array(arr2[0].length).fill(0));
    }
   
    //계산
    for (i=0; i<arr1.length; i++){ //행
        for(h=0; h<arr2[0].length; h++){ //열
            let sum =0;
            for(j=0; j<arr1[0].length; j++){ // 곱하기
                sum += arr1[i][j] * arr2[j][h];
            }
            answer[i][h] = sum;
        }
    }
    return answer;
}
