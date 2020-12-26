
function getYearOfBirth(age) {
  return 2020 - age 
}

function createGreeting(name, age){ 
  const yob = getYearOfBirth(age)
  return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yob}.`
}

const greet1 = createGreeting('Chris', 29);
console.log(greet1)