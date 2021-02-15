/*
This script file holds all of the functions used to animate site navigation.

Started by Sam Turcotte, 2021-02-13
TODO: 

1. Re-factor questionnaire to a more DRY configuration. It is hacked together quickly to make it work right now, 
  and might stay this way until this p[roject gets translated into REACT.
2. 
*/

//Fields to hold user preferences: No persistent storage of choices.
// IMPORTANT: If anyone adds cookies or session/local storage functionality, the
// user must be notified and a cookie policy must be added to the site.
let userType = "default";
let infoTarget = "default";

$(document).ready(() => {
  //Fire on page load for testing
  $("#greeting-block").fadeIn(1000);
});

//Intro progression
function showIntroQuestion_1() {
  $("#greeting-block").fadeOut(1000, () => {
    $("#intro-questions-1").show();
  });
}
function setupDevUser() {
  userType = "developer";
  showIntroQuestion_2();
}
function setupNormalUser() {
  userType = "manager";
  showIntroQuestion_2();
}
function setupSavvyUser() {
  userType = "savvy";
  showIntroQuestion_2();
}
function showIntroQuestion_2() {
  $("#intro-questions-1").fadeOut(1000, () => {
    $("#intro-questions-2").show();
  });
}
function prioritizeSoftSkills() {
  infoTarget = "soft-skills";
  $("#home-redirect").show();
  $("#school-redirect").show();
  $("#goals-redirect").show();
  showQuestionnaireResult();
}

function prioritizeTechnical() {
  infoTarget = "tech-skills";
  $("#tech-redirect").show();
  $("#school-redirect").show();
  $("#projects-redirect").show();
  showQuestionnaireResult();
}
function prioritizeWorkHistory() {
  infoTarget = "work-history";
  $("#work-redirect").show();
  $("#tech-redirect").show();
  $("#projects-redirect").show();
  showQuestionnaireResult();
}
function showQuestionnaireResult() {
  $("#intro-questions-2").fadeOut(1000, () => {
    $("#intro-questions-result").show();
  });
}

//Navigation Functions
function goToHome(userType) {}
function goToTech(userType) {}
function goToSchool(userType) {}
function goToWork(userType) {}
function goToProjects(userType) {}
function goToGoals(userType) {}
//End
