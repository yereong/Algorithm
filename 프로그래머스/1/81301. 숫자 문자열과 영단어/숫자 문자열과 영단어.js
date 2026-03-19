function solution(s) {
    let dict = {
	    zero :0,
	    one :1,
	    two : 2,
	    three : 3,
        four : 4,
	    five : 5,
	    six : 6,
	    seven : 7,
	    eight : 8,
	    nine : 9
    }
    let answer = '';
    let string = '';
    for ( i = 0; i < s.length; i++){
        if( s[i] >= '0' && s[i] <= '9'){
            answer += String(s[i]);
        }else {
            string += s[i];
            
            if (string in dict){
                answer += String(dict[string]);
                string = '';
            }
        }
    }
    
    return Number(answer);
}