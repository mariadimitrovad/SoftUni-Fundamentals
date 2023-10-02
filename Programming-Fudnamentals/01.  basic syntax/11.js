function solve(input){
  let pricePerBitcoin = 11949.16;
  let goldPrice = 67.51;
  let boughtBitcoins = 0;
  let dayPurchasedBitcoin = 0;
  let moneyLeft = 0;
  let confirmFirstDay = 0;
  
  for(let i = 1; i <= input.length; i++){
   let dailyGold = input[i - 1];
   
   if(i % 3 == 0){
    dailyGold *= 0.7;
   }
  
   dailyGold *= goldPrice;
   moneyLeft += dailyGold;
  
   while(moneyLeft >= pricePerBitcoin){
    moneyLeft -= pricePerBitcoin;
  
    confirmFirstDay++;
    boughtBitcoins++;
  
    if(confirmFirstDay == 1){
      dayPurchasedBitcoin = i;
    }
   }
  }
  console.log(`Bought bitcoins: ${boughtBitcoins}`);
  if(boughtBitcoins > 0){
    console.log(`Day of the first purchased bitcoin ${dayPurchasedBitcoin}`);
  }
  console.log(`Left money ${moneyLeft.toFixed(2)} lv.`);
  }
  solve([100,200,300]);