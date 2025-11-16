let dailyGoal = 10000;
let stepsToday = 8342;

console.log("Daily step goal:", dailyGoal);
console.log("Steps today:", stepsToday);

let percentage = (stepsToday / dailyGoal) * 100;

console.log("You reached:", percentage.toFixed(1) + ("% of your steps goal today"));
