function solve (num){
let sum = 0;
let numAsStr = num.toString();

for(let i = 0; i < numAsStr.length; i++){
  let curDigit = Number(numAsStr[i]);

  sum += curDigit;
}
console.log(sum);
}
solve(245678);