// sync.js
function login() {
  console.log("User logged in");
}

function getData() {
  console.log("Data fetched");
}

function displayData() {
  console.log("Data displayed");
}

function attemptTest() {
  console.log("Test attempted");
}

function logout() {
  console.log("User logged out");
}

function callOtherApp() {
  console.log("Calling other app...");
}

function waitFiveSeconds() {
  const start = Date.now();
  while (Date.now() - start < 5000) {} // blocking wait
}

// Flow
login();
getData();
displayData();
attemptTest();
logout();
callOtherApp();
waitFiveSeconds();
console.log("Done");
