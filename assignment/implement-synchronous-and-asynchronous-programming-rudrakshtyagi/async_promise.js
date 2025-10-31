function login() {
  return new Promise(resolve => {
    console.log("User logged in");
    resolve();
  });
}

function getData() {
  return new Promise(resolve => {
    console.log("Data fetched");
    resolve();
  });
}

function displayData() {
  return new Promise(resolve => {
    console.log("Data displayed");
    resolve();
  });
}

function attemptTest() {
  return new Promise(resolve => {
    console.log("Test attempted");
    resolve();
  });
}

function logout() {
  return new Promise(resolve => {
    console.log("User logged out");
    resolve();
  });
}

function callOtherApp() {
  return new Promise(resolve => {
    console.log("Calling other app...");
    setTimeout(resolve, 5000);
  });
}


login()
  .then(getData)
  .then(displayData)
  .then(attemptTest)
  .then(logout)
  .then(callOtherApp)
  .then(() => console.log("Done"));
