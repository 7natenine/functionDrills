
function getYearOfBirth(age) {
  if(age>2020||age<0)
    throw new Error("Age can not be negative");
  return 2020 - age;
}

function createGreeting(name, age){ 
  const yob = getYearOfBirth(age)
  return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yob}.`;
}

function people(name,age){
  try {
    if(!age||!name)
      throw new Error("Variables are null or undefined.")
    if(isNaN(age))
      throw new TypeError("Age is not an intger.")
    const greet = createGreeting(name,age)
    console.log(greet)
  }catch (e) { 
    console.error(e.message);
  }
}

people('Chris', 29);
people('Dan', -3);
people('Ben', 2021);
people('',);
people('Sabrina','Lexi')
