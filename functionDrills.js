
function getYearOfBirth(age) {
  if(age>2020||age<0)
    throw new Error("age can not be negative");
  return 2020 - age;
}

function createGreeting(name, age){ 
  const yob = getYearOfBirth(age)
  return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yob}.`;
}

function people(name,age){
  try {
    const greet = createGreeting(name,age)
    console.log(greet)
  }catch (err) { 
    console.log('Silly Goose! Your age must be wrong!')
  }
}

people('Chris', 29);
people('Dan', -3);
people('Ben', 2021);
