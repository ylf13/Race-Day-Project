// Race Day

let raceNumber = Math.floor(Math.random() * 1000);

// check if runner registered early or not by assigning a boolean value 
var earlyRegistrant = true;

// Runner's age
var age = 23

// check if runner is an adult AND registered early 
// Add 1000 to their raceNumber if this is true

if (age > 18 && earlyRegistrant){
    raceNumber += 1000;
}

// Runners over 18 who registered early
if(age > 18 && earlyRegistrant){
    console.log(`You will race at 9:30am. Your race number is: ${raceNumber}`);
}

// Runners over 18 and did not register early
else if (age > 18 && !earlyReigistrant){
    console.log(`You will race at 11:00am. Your race number is: ${raceNumber}`);
}

// Runners under 18
else (age < 18){
    console.log(`You will race at 12:30pm. Your race number is: ${raceNumber}`;)
}
