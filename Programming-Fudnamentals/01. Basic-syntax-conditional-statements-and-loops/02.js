function solve(num, precision) {
if(precision > 15){
  precision = 15;
}

let fixedNum = num.toFixed(precision);
console.log(parseFloat(fixedNum));
}
solve(3.1415926535897932384626433832795,2);