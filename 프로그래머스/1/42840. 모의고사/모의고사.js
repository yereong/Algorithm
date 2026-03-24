function solution(answers) {
    let arr = [
        count1={count:0, name:1},
        count2={count:0, name:2},
        count3={count:0, name:3}
    ]
    let answer = [];
    for (i=0; i<answers.length; i++){
        if (i%2 === 0 && answers[i] === 2)count2.count++;
        if(answers[i] === (i%5)+1) count1.count++;
        if(i%8 === 1 && answers[i] === 1) count2.count++;
        if(i%8 === 3 && answers[i] === 3) count2.count++;
        if(i%8 === 5 && answers[i] === 4) count2.count++;
        if(i%8 === 7 && answers[i] === 5) count2.count++;
        if((i%10 === 0 || i%10 === 1) && answers[i] === 3) count3.count++;
        if((i%10 === 2 || i%10 === 3) && answers[i] === 1) count3.count++;
        if((i%10 === 4 || i%10 === 5) && answers[i] === 2) count3.count++;
        if((i%10 === 6 || i%10 === 7) && answers[i] === 4) count3.count++;
        if((i%10 === 8 || i%10 === 9) && answers[i] === 5) count3.count++; 
        }
        const max = Math.max(...arr.map((v)=>v.count));
        return arr.filter(v=>v.count === max).map(v=>v.name);
        
    }