class Car {
  constructor({ title}) {
    this.title = title;
  }

  drive() {
    return 'vromm';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({ title: 'Toyota', color: 'red' });
toyota.drive();
toyota.honk();
