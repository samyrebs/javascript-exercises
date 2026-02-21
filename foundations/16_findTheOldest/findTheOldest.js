const findTheOldest = function(people) {
    let test = people.reduce(function(obj, value){
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        if("yearOfDeath" in value){
            obj[value.name] = value.yearOfDeath - value.yearOfBirth;
        } else {
            obj[value.name] = currentYear - value.yearOfBirth;
        }
        return obj; 
    }, {});
    const oldest = Object.entries(test).reduce(function(max, current){
        if(current[1] > max[1]){
            return current;
        } else {
            return max;
        }
    });
    return people.find(person => person.name === oldest[0]);
};
const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
