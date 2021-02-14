/*
This script file holds all of the functions used to animate site navigation.

Started by Sam Turcotte, 2021-02-13
*/

$(document).ready(() => {
  //Fire on page load for testing
  $("#greeting-block").hide();
  $("#intro-questions-1").show();
});

//Intro progression
function fireIntroQuestions() {
  $("#greeting-block").fadeOut(1000);
  $("#intro-questions-1").fadeIn(2000);
}

//Navigation Functions
function goToHome(userType) {}
function goToTech(userType) {}
function goToSchool(userType) {}
function goToWork(userType) {}
function goToProjects(userType) {}
function goToGoals(userType) {}
//End
