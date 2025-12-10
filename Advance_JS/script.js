// Callback Pratise

//1

function afterDelay(time, cb) {
  setTimeout(() => {
    cb();
  }, time);
}

afterDelay(3000, function () {
  console.log("Callback executed...");
});

//2

function getUser(username, cb) {
  console.log("getting user data...")
  setTimeout(() => {
    cb({ id: 100, name: username });
  }, 2000);
}

function getUserPosts(id, cb) {
  console.log("getting post details...")
  setTimeout(() => {
    cb(["hello", "kese ho"]);
  }, 3000);
}

getUser("Ramesh", function (data) {
  getUserPosts(data.id, function (allposts) {
    console.log(data.username, allposts);
  });
});

// Own Scenerio

function CollegeJawwo(username, cb) {
  console.log("Data Fetching....");
  setTimeout(() => {
    cb({ id: "1ST21CS063", name: username });
  }, 2000);
}

function getStudentDetail(id, cb) {

  console.log("Student data fetching")

  setTimeout(() => {
    cb({ rollNo: id });
  }, 3000);
}

CollegeJawwo("Sushil", function (data) {
  console.log(data.name);

  getStudentDetail(data.id, function (details) {
    console.log(details.rollNo);
  });
});

//3.

function loginUser(username, cb) {
  console.log("User details fetching ................");

  setTimeout(() => {
    cb({ id: 63, name: username });
  }, 1000);
}
function fetchPermissions(id, cb) {
  console.log("Permission Fetching...........");

  setTimeout(() => {
    cb(["Access to learn", "Access to Delete", "Access to Modify"]);
  }, 2000);
}
function loadDashboard(permissions, cb) {
  console.log("Permission Loaded............");
  cb();
}

loginUser("Hari", function (userdata) {
  fetchPermissions(userdata.id, function (permissions) {
    loadDashboard(permissions, function () {
      console.log("Permission Loaded Successfully !");
    });
  });
});
