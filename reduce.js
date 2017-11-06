const numbers = [10, 20, 30];

numbers.reduce(((n, sum) => sum + n), 0);

const primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

primaryColors.reduce(function(acc, primaryColor) {
  acc.push(primaryColor.color);
  return acc;
}, []);

function balancedParens(string) {
  return !string.split("").reduce(function(previous, char){
    if (previous < 0) { return previous; }
    if (char === "(") { return ++previous; }
    if (char === ")") { return --previous; }
    return previous;
  }, 0);
}

balancedParens(")()((");
balancedParens("()()((()))")

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(((acc, d) => acc + d.distance), 0);

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    if(desk.type === 'sitting')
        acc['sitting'] += 1;
    else
        acc['standing'] += 1;

    return acc;
}, { sitting: 0, standing: 0 });
