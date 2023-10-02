function solve(bookPages, readPerHour, daysForReading){
let totalTimeRead = bookPages / readPerHour;
let readingPerDay = totalTimeRead / daysForReading;

console.log(readingPerDay);
}
solve(212,
  20 ,
  2);