/*
This script file holds all of the functions used to animate site navigation.

Started by Sam Turcotte, 2021-02-13
*/

//Fields to hold user preferences: No persistent storage of choices.
// IMPORTANT: If anyone adds cookies or session/local storage functionality, the
// user must be notified and a cookie policy must be added to the site.

let userType = null;
let infoTarget = null;
let organisationType = null;

$(document).ready(() => {
  //Fire on page load for testing
  $(".content-block").hide();
  $("#greeting-block").fadeIn(1000);
});

//Intro progression
function fireIntroQuestions() {
  $("#greeting-block").fadeOut(1000, () => {
    $("#intro-questions-1").show();
  });
}

function setupDevUser() {
  userType = "developer";
}
function setupNormalUser() {
  userType = "manager";
}
function setupSavvyUser() {
  userType = "savvy";
}

//Navigation Functions
function goToHome(userType) {}
function goToTech(userType) {}
function goToSchool(userType) {}
function goToWork(userType) {}
function goToProjects(userType) {}
function goToGoals(userType) {}
//End
