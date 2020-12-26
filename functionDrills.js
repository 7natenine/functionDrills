
function createGreeting(name, age){ 
  const yearOfBirth = 2020 - age;
  return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth}.`
}

const greet1 = createGreeting('Chris', 29);
console.log(greet1)