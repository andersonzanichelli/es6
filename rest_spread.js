function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
addNumbers(1,1,2,2,3,4,5,6,7,8,9,10);

const defaultColor = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];
[ 'blue', ...fallColors, ...defaultColor, ...userFavoriteColors];

function validShoppingList(...itens) {
  if( items.indexOf( 'milk' ) < 0 )
    return [ 'milk', ...items ];

  return items;
}
validShoppingList('oranges', 'bread', 'eggs');

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead')
    return this.multiply(...rest);
  },

  multiply(a, b) {
    return a * b;
  }
}
