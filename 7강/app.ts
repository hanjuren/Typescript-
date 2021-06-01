let someValue: any = 5;
someValue = 'hanjure';

let someUnionValue: string | number = 5;
someUnionValue = 'hanjuren';

type strOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: strOrNum):void => {
  if (typeof price === 'string') {
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};

setItemPrice(50);