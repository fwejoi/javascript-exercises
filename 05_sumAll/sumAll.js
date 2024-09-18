const sumAll = function(start,end) {
    if(typeof start !=='number'||typeof end !=='number'||start<0||end<0||
        !Number.isInteger(start)||!Number.isInteger(end)){
            return 'ERROR';
        }

    let min=Math.min(start,end);
    let max=Math.max(start,end);

    let sum=0;
    for(let i=min;i<=max;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
