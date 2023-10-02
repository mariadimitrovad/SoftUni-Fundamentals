function solve(count, type, day){
let pricePerHuman = 0;
switch(day){
  case 'Friday':
    if(type === 'Students'){
      pricePerHuman = 8.45;
    } else if(type === 'Business'){
      pricePerHuman = 10.90;
    } else if (type === 'Regular'){
      pricePerHuman = 15;
    }
    break;
    case 'Saturday':
      if(type === 'Students'){
        pricePerHuman = 9.80;
      } else if(type === 'Business'){
        pricePerHuman = 15.60;
      } else if (type === 'Regular'){
        pricePerHuman = 20;
      }
      break;
      case 'Sunday':
        if(type === 'Students'){
          pricePerHuman = 10.46;
        } else if(type === 'Business'){
          pricePerHuman = 16;
        } else if (type === 'Regular'){
          pricePerHuman = 22.50;
        }
        break;
}

let totalPrice = pricePerHuman * count;

if(type == 'Students' && count >= 30){
  totalPrice *= 0.85;
} else if (type == 'Business' && (count >= 100)){
let discountPrice = 10 * pricePerHuman;
totalPrice -= discountPrice;
} else if (type == 'Regular' && (count >= 10 &&  count <= 20)){
  totalPrice *= 0.95;
}

console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(30,"Students","Sunday");