function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vromm';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ title: 'Daily Driver', color: 'red' });
car.drive();
