const now = new Date();
console.log("Bieżąca data", now);
const nowTime = Date.now();
console.log("Liczba milisekund od początku epoki", nowTime);
const birth = Date.parse("2000-10-10");
console.log("Liczba milisekund od początku epoki do 2000-10-10", birth);
const birthDate = new Date(birth);
console.log("Data urodzina", birthDate);
console.log("Dzień miesiąca urodzin:", birthDate.getDate());
console.log("Miesiąc urodzin (styczeń ma numer 0!!!):", birthDate.getMonth() + 1);
console.log("Rok urodzin:", birthDate.getFullYear());
console.log("Czas urodzin:", birthDate.getTime());
const elapsedTime = Date.now() - birth;
const elapsedTimeAsDate = new Date(elapsedTime);
console.log("Od urodzin minęło lat:", elapsedTimeAsDate.getFullYear() - 1970);
console.log("Od urodzin minęło miesięcy:", elapsedTimeAsDate.getMonth());
console.log("Od urodzin minęło dni:", elapsedTimeAsDate.getDate());
console.log("Czas ISO", now.toISOString());
console.log("Data wg ustawień lokalnych:", (new Date()).toLocaleDateString("pl-PL",{timeZone: 'UTC'})); 
console.log("Czas wg ustawień lokalnych:", (new Date()).toLocaleTimeString("pl-PL", {timeZone: 'Europe/Warsaw' }));
console.log("Data i czas wg ustawień lokalnych:", (new Date()).toLocaleString("pl-PL", { timeZone: 'Europe/Warsaw' })); 
