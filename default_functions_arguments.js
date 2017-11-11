function makeAjaxRequest(url, method = 'GET') {
  // your logic here
}

makeAjaxRequest('example.com');
makeAjaxRequest('example.com', 'POST');

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
