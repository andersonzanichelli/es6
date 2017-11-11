function makeAjaxRequest(url, method = 'GET') {
  // your logic here
}

makeAjaxRequest('example.com');
makeAjaxRequest('example.com', 'POST');

// ---------------------------------------
function sum(a = 0, b = 0) {
  return a + b;
}

function addOffset(style = {}) {
  style.offset = '10px';

  return style;
}

// ---------------------------------------
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * new Date().getMilliseconds() * 99999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

createAdminUser();
