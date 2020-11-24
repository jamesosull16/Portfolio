$(document).ready(function () {
  const personalInfo = $("#personal");
  const name = $("<h1>");
  const job = $("<h3>");
  const aboutBtn = $("<button>", {
    class: "btn btn-outline-info",
    id: "aboutBtn",
  });
  const projectsBtn = $("<button>", {
    class: "btn btn-outline-info",
    id: "projectsBtn",
  });
  const resumeBtn = $("<button>", {
    class: "btn btn-outline-info",
    id: "resumeBtn",
  });

  name.text("James O'Sullivan");
  job.text("Software Developer");

  aboutBtn.text("About Me");
  projectsBtn.text("Projects");
  resumeBtn.text("Resume");

  personalInfo.append(name);
  personalInfo.append(job);
  personalInfo.append(aboutBtn);
  personalInfo.append(projectsBtn);
  personalInfo.append(resumeBtn);

  //social images and links
  const socialLinks = $("#social");

  const githubBtn = $("<button>", {
    class: "btn btn-outline-info",
    id: "githubBtn",
  });
  const linkedinBtn = $("<button>", {
    class: "btn btn-outline-info",
    id: "linkedinBtn",
  });

  githubBtn.text("Github");
  linkedinBtn.text("LinkedIn");

  socialLinks.append(githubBtn);
  socialLinks.append(linkedinBtn);

  personalInfo.append(socialLinks);

  //event listeners
  $("#aboutBtn").on("click", function () {
    location.href = "./assets/about.html";
  });

  $("#projectsBtn").on("click", function () {
    location.href = "./assets/portfolio.html";
  });

  $("#resumeBtn").on("click", function () {
    window.open("./assets/Resume2021.pdf", "_blank");
  });

  $("#githubBtn").on("click", function () {
    window.open("https://github.com/jamesosull16", "_blank");
  });

  $("#linkedinBtn").on("click", function () {
    window.open(
      "https://www.linkedin.com/in/james-o-sullivan-5081b941/",
      "_blank"
    );
  });
});
