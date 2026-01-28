const sumAll = function(numOne, numTwo) {
    if((Number.isInteger(numOne) == false) || (Number.isInteger(numTwo) == false)){
        return "ERROR";
    }
    if((numOne < 0) || (numTwo < 0)){
        return "ERROR";
    }
    let bigNum = 0;
    let smallNum = 0;
    if(numOne > numTwo){
        bigNum = numOne;
        smallNum = numTwo;
    } else if (numTwo > numOne){
        bigNum = numTwo;
        smallNum = numOne;
    } else {
        return 0;
    }
    let count = 0;
    for(let i = smallNum; i <= bigNum; i++){
        count = count + i;
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
