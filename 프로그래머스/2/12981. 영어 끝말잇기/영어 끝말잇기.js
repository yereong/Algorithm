function solution(n, words) {
    let people = new Map([[1,1],]); // 1번 : n회 저장
    let used = [words[0],]; // 이미 사용한 단어
    //가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지
    let cur = 1;
    while(cur < words.length){
        //cur%n +1번사람한테 횟수 +1 , used 배열에 추가
        let person = cur%n +1;
        if(people.has(person)){
             people.set(person,people.get(person)+1);
        }else{people.set(person,1);}
       
        //이전단어의 끝글자로 시작하는지 && 단어리스트에 존재하는 글자인지 검사
        let lastChar = words[cur-1][words[cur-1].length-1];
        console.log(lastChar, words[cur][0], used)
        if(lastChar !== words[cur][0] || used.includes(words[cur])){
            return [person, people.get(person)];
        }
        else if(cur === words.length-1){
            return [0,0]
        }else{
            used.push(words[cur]);
            cur++;
        }
    }
}