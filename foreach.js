const colors = [ 'red', 'blue', 'green' ]

colors.forEach(function(color) {
  console.log(color);
});

//----------------------
const numbers = [1,2,3,4,5];
var sum = 0;

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

console.log(sum);

//----------------------

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

function area(image) {
    return image.height * image.width;
}

images.forEach(function(image){
    areas.push(area(image));
});
