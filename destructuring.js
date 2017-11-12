const expense = {
  type: 'business',
  amount: '$45 USD'
};

const { type, amount } = expense;

const savedFile = {
  extension: '.jpg',
  name: 'report',
  size: 14879
};

function fileSumary({ name, extension, size }) {
  return `The file ${name}${extension} is of size ${size}`;
}

fileSumary(savedFile);

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, ...rest ] = companies;
const { length } = companies;

const techCia = {
  { name: 'Google', location: 'Montain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
}

const [{ location }] = techCia;

const Google = {
  locations: [ 'Montain View', 'New York', 'London' ]
};

const { locations: [location] } = Google;
location;

function signup( username, password, email, city ) {
  //create user
}
signup('myname', 'mypass', 'my@email.com', 'Maringa');
//refactor
const user = {
  username: 'myname',
  password: 'mypass',
  email:  'my@email.com',
  city: 'Maringa'
};

function signup({ username, password, city, email }) {
  //create user
}

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];
// Transforme

points.map(([x, y]) => {
  return { x, y }
});

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([ subject, time, teacher ]) => {
    return {
        subject,
        time,
        teacher
    };
});

const numbers = [1, 2, 3];

function double([n,...numbers]) {
    if(n === undefined)
        return [];

    return [n*2, ...double(numbers)];
}

const double = ([num, ...rest]) => num ? [num * 2, ...double(rest)] : [];
