$(document).ready(function () {
  const personalInfo = $("#personal");
  const name = $("<h1>");
  const job = $("<h3>");

  const aboutBtn = $("#aboutBtn");
  const projectsBtn = $("#projectsBtn");
  const resumeBtn = $("#resumeBtn");

  const githubBtn = $("#githubBtn");
  const linkedinBtn = $("#linkedinBtn");

  name.text("James O'Sullivan");
  job.text("Software Developer");

  aboutBtn.text("About Me");
  projectsBtn.text("Projects");
  resumeBtn.text("Resume");
  githubBtn.text("Github");
  linkedinBtn.text("LinkedIn");

  personalInfo.append(name);
  personalInfo.append(job);
  personalInfo.append(aboutBtn);
  personalInfo.append(projectsBtn);
  personalInfo.append(resumeBtn);
  personalInfo.append(githubBtn);
  personalInfo.append(linkedinBtn);

  $("#aboutBtn").on("click", function () {
    location.href = "./assets/about.html";
  });

  $("#projectsBtn").on("click", function () {
    location.href = "./assets/portfolio.html";
  });

  $("#resumeBtn").on("click", function () {
    location.href = "./assets/Resume2021.pdf";
  });

  $("#githubBtn").on("click", function () {
    location.href = "https://github.com/jamesosull16";
  });

  $("#linkedinBtn").on("click", function () {
    location.href = "https://www.linkedin.com/in/james-o-sullivan-5081b941/";
  });
});
