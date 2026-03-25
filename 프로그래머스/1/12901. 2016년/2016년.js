function solution(a, b) {
    const day = ['SAT','SUN','MON','TUE','WED','THU','FRI']
    if(a === 1 && b ===1) return 'FRI'
    const date1 = new Date('2016-01-01');
    const date2 = new Date(2016,a-1,b);
    
    let diffMs = date2 - date1;
    let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    
    return day[diffDays%7]
}