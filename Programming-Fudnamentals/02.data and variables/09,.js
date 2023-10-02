function solve(n) {
  for (let i = 1; i <= n; i++) {
    let digitSum = 0;
    let numStr = i.toString();
    
    for (let j = 0; j < numStr.length; j++) {
      digitSum += Number(numStr[j]);
    }

    const isSpecial = digitSum === 5 || digitSum === 7 || digitSum === 11;
    console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
  }
}
solve(15);

