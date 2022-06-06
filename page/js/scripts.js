const navs = document.body.querySelectorAll(".fake-nav");

navs.forEach((n) => {
  n.addEventListener("mousedown", () => {
    alert("로그인이 필요한 서비스입니다.");
  });
});

const submitBtn = document.body.querySelector("#submitButton");
const fakeRegi = document.body.querySelector(".fake-regi");
const googleBtn = document.body.querySelector("#googleBtn");

submitBtn.addEventListener("click", () => {
  location.reload();
  alert("오류가 발생했습니다. 다른 로그인 방식을 시도해주십시오");
});
fakeRegi.addEventListener("click", () => {
  location.reload();
  alert("오류가 발생했습니다. 다른 로그인 방식을 시도해주십시오");
});
googleBtn.addEventListener("click", () => {
  setTimeout(() => {
    location.href = "login/google.html";
  }, 800);
});
