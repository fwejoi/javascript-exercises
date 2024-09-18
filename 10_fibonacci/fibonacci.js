const fibonacci = function(number) {
    number=parseInt(number);
    if(number===0){
        return 0
    }else if(number<0){
        return "OOPS";
    }
    else if(number===1){
        return 1;
    }else{
        return fibonacci(number-2)+fibonacci(number-1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
