function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield 'cash';

  // walking to laundry place
  const cleanClothes = yield 'laundry';

  // walking back home
  return [ stuffFromStore, cleanClothes ];
}

const gen = shopping();
gen.next(); // leaving our house
// walked into the store
// walking up and down th aisles
// purchase our stuff
gen.next('groceries'); // leaving the store with groceries
gen.next('clean clothes');


function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  departament: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
}

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
names;
