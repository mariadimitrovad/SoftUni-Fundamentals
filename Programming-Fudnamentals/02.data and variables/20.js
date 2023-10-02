function solve(startYield){
let workingDays = 0;
let totalAmountSpice = 0;

while (startYield >= 100){ //източник е печеливш ако добивът му е най-малко 100 

  workingDays++;

  totalAmountSpice += startYield;
  totalAmountSpice -= 26; // екип консумира 26 подправки всеки ден в края на смяната си

  startYield -= 10; // добивът пада с 10, на втория ден ще произведе 10 по-малко, третия ден 10 по-малкo
}

if(totalAmountSpice >= 26){
  totalAmountSpice -= 26;
// и още 26, след като мината е изчерпана. 

console.log(workingDays);
console.log(totalAmountSpice);
}

}
solve(111);