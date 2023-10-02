function solve(char){
let theCase = char.charCodeAt();

if(theCase >= 65 && theCase <= 90){
  console.log('upper-case');
} else {
  console.log('lower-case');
}
}
solve('L');