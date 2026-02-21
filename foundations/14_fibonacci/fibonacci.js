const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    num = Number(num);
    let num1 = 0;
    let num2 = 1;
    for(let i = 1; i <= num; i++){
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        console.log(num1+" "+num2);
    }
    return num1;
};
// Do not edit below this line
module.exports = fibonacci;
