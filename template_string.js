function getmessage() {
  return `The year is ${new Date().getFullYear()}`;
};

getmessage();


const device_id = 4;
const guid = 20;
const username = "hello";
let data = `{"device_id": ${device_id}, "guid": ${guid}, "username": ${username}}`;

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
