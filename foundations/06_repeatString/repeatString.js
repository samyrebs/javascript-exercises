const repeatString = function(string, count) {
    let newString = "";
    if(count < 0){
        return "ERROR";
    }
    for(let i = 0; i < count; i++){
        newString = newString + string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
