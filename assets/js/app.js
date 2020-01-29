let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 18;

if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
  console.log(
    `You are an adult and registered early. Your registration number is: ${raceNumber}`
  );
} else if (age > 18 && registeredEarly === false) {
  console.log("You are an adult and NOT registered early");
} else if (age < 18 && registeredEarly === true) {
  raceNumber += 1000;
  console.log(
    `You are a youth and registered early. Your registration number is: ${raceNumber}`
  );
} else if (age < 18 && registeredEarly === false) {
  console.log("You are a youth but NOT registered early");
} else {
  console.log("Please see the registration desk.");
}

if (age > 18 && registeredEarly === true) {
  console.log(
    `Your race will take place at 9:30 and your race number is ${raceNumber}`
  );
} else if (age > 18 && registeredEarly === false) {
  raceNumber += 1000;
  console.log(`You will race at 11:00am, your number is ${raceNumber}`);
} else if (age < 18 && registeredEarly === true) {
  console.log(
    `Your race will take place at 1:30 and your race number is ${raceNumber}`
  );
} else if (age < 18 && registeredEarly === false) {
  raceNumber += 1000;
  console.log(
    `Your race will take place at 1:30 and your race number is ${raceNumber}`
  );
} else {
  console.log("Please see the registration desk.");
}