function login(callback) {
  console.log("User logged in");
  callback();
}

function getData(callback) {
  console.log("Data fetched");
  callback();
}

function displayData(callback) {
  console.log("Data displayed");
  callback();
}

function attemptTest(callback) {
  console.log("Test attempted");
  callback();
}

function logout(callback) {
  console.log("User logged out");
  callback();
}

function callOtherApp(callback) {
  console.log("Calling other app...");
  setTimeout(callback, 5000); 
}


login(() => {
  getData(() => {
    displayData(() => {
      attemptTest(() => {
        logout(() => {
        callOtherApp(() => {
            console.log("Done");
          });
        });
      });
    });
  });
});
