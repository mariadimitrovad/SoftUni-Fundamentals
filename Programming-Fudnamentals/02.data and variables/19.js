function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let helmetBroken = 0;
  let swordBroken = 0;
  let shieldBroken = 0;
  let armorBroken = 0;

  let totalExpenses = 0;

  for (let fight = 1; fight <= lostFights; fight++) {
    if (fight % 2 === 0) {
      helmetBroken++;
      totalExpenses += helmetPrice;
    }
    if (fight % 3 === 0) {
      swordBroken++;
      totalExpenses += swordPrice;
    }
    if (helmetBroken > 0 && swordBroken > 0) {
      shieldBroken++;
      totalExpenses += shieldPrice;
      helmetBroken--;
      swordBroken--;
    }
    if (shieldBroken % 2 === 0) {
      armorBroken++;
      totalExpenses += armorPrice;
    }
  }

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

calculateExpenses(7,2,3,4,5);

// • Всяка втора загубена игра шлемът му е счупен.
// • Всяка трета загубена игра мечът му е счупен.
// • Когато мечът и шлемът му са счупени в една и съща загубена битка, щитът му също се чупи.
// • Всеки втори път, когато щитът му се счупи, бронята му също трябва да бъде поправена.
