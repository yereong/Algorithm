function solution(nums) {
    let list = [];
    for( let i=0; i<nums.length-2; i++){
        for(j=i+1; j<nums.length-1; j++){
            for(k=j+1; k<nums.length; k++){
                let num =nums[i]+nums[j]+nums[k];
                if (isPrime(num) === true) list.push(num);
            }
        }
    }
    console.log(list)
    return list.length;
}

function isPrime(num){
    if (num < 2)return false;
    for( let i = 2; i*i <= num; i++){
        if (num % i === 0) return false;
        
    }return true;
}