function solve(theYield){
let days = 0;
let spice = 0;

while(theYield >= 100){
spice += theYield;
spice -= 26;
theYield -= 10;
days++;
}
if(spice >= 26){
  spice -= 26;
}
console.log(days);
console.log(spice);
}
solve(111);



