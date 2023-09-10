const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

const date = new Date();
console.log(date);

// Get UTC time in milliseconds
const getUTC = date.getUTCMilliseconds();
currentUTCTime.innerHTML = getUTC;

// Get current day of the week
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const getCurrentDay = weekday[date.getDay()];
currentDayOfTheWeek.innerHTML = getCurrentDay;
