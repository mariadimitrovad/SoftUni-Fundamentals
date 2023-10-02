function solve(n, nums){
let result  = [];
result[0] = nums[0];
result[1] = result[1];
result[2] = result[2];

let reversed = [];
for(let i = 2; i >= 0; i--){
  reversed[reversed.length] = result[i];

  console.log(reversed.join());
}
}
solve(3, [10, 20, 30, 40, 50]);