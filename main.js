let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

let workHours = document.getElementById("work-hours");
let playHours = document.getElementById("play-hours");
let studyHours = document.getElementById("study-hours");
let excerciseHours = document.getElementById("excercise-hours");
let socialHours = document.getElementById("social-hours");
let selfCareHours = document.getElementById("self-care-hours");

let obj = {
  days: {
    work: "5hrs",
    play: "1.5hrs",
    study: "0.5hrs",
    excercise: "0.5hrs",
    social: "1hrs",
    self_care: "0.5hrs",
  },
  weeks: {
    work: "32hrs",
    play: "10hrs",
    study: "4hrs",
    excercise: "4hrs",
    social: "5hrs",
    self_care: "2hrs",
  },
  months: {
    work: "125hrs",
    play: "40hrs",
    study: "15hrs",
    excercise: "15hrs",
    social: "20hrs",
    self_care: "6hrs",
  },
};

daily.addEventListener("click", function () {
  workHours.innerText = obj.days.work;
  playHours.innerText = obj.days.play;
  studyHours.innerText = obj.days.study;
  excerciseHours.innerText = obj.days.excercise;
  socialHours.innerText = obj.days.social;
  selfCareHours.innerText = obj.days.self_care;
});

weekly.addEventListener("click", function () {
  workHours.innerText = obj.weeks.work;
  playHours.innerText = obj.weeks.play;
  studyHours.innerText = obj.weeks.study;
  excerciseHours.innerText = obj.weeks.excercise;
  socialHours.innerText = obj.weeks.social;
  selfCareHours.innerText = obj.weeks.self_care;
});

monthly.addEventListener("click", function () {
  workHours.innerText = obj.months.work;
  playHours.innerText = obj.months.play;
  studyHours.innerText = obj.months.study;
  excerciseHours.innerText = obj.months.excercise;
  socialHours.innerText = obj.months.social;
  selfCareHours.innerText = obj.months.self_care;
});
