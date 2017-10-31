const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = computers.every((x) => x.ram > 16)
var someComputersCanRunProgram = computers.some((x) => x.ram > 16)

var names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

allNamesHaveMoreThan4 = names.every((name) => name.length > 4)
someNamesHaveMoreThan4 = names.some((name) => name.length > 4)

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field("0cool");
var password = new Field("hackers");

var fields = [username, password]

var formIsValid = fields.every((field) => field.validate())

if(formIsValid) {
//  ...
}

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every((user) => hasSubmitted);

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some((req) => req.status === 'pending');
