function solve(num1, num2){
  let totalSum = 0;
  let nums = '';

for(let num = num1; num <= num2; num++){
 totalSum += num;
 nums += `${num} `
}
console.log(nums);
console.log(`Sum: ${totalSum}`);
}
solve(5,10);