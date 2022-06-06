const loginBox = document.querySelector(".outBox");
const loginInputBox = document.querySelector("#sampleId");
loginInputBox.addEventListener("keyup", function () {
  if (!loginInputBox.value == "") {
    loginBox.classList.add("existence");

    location.href = "../warning/warning.html";
  } else {
    loginBox.classList.remove("existence");
  }
});
