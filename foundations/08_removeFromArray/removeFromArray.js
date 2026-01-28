const removeFromArray = function(array, ...nums) {
    function compare(a, b) {
        if (a > b) return 1; // if the first value is greater than the second
        if (a == b) return 0; // if values are equal
        if (a < b) return -1; // if the first value is less than the second
    }
    let indexes = [];
    for(let i = 0;  i < nums.length; i++){
        let idx = array.indexOf(nums[i]);
        while (idx !== -1){
            indexes.push(idx);
            idx = array.indexOf(nums[i], idx + 1);
        }
    }
    indexes.sort(compare);
    console.log(indexes);
    while(indexes.length >= 1){
        array.splice(indexes[0], 1);
        console.log(array);
        indexes.splice(0, 1);
        indexes = indexes.map(value => value - 1);
        console.log(indexes);
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
