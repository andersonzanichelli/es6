const numbers = [1,2,3];
numbers.map((x) => x*2);
numbers.map((x) => Math.pow(x,2));

const cars = [
  { model: 'Buick', price: 'CHEAP'},
  { model: 'Camaro', price: 'EXPENSIVE'}
];

cars.map((x) => x.price);

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = [];

images.map((i) => heights.push(i.height));

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = [];

trips.map((t) => speeds.push(t.distance / t.time));

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color');

function pluck(array, property) {
    return array.map((item) => item[property]);
}
