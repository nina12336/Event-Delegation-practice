const getButton = document.querySelector("div");
getButton.addEventListener("click", function (e) {
  if (e.target.id === "btn1") {
    document.body.style.backgroundColor = "#f5cac3";
  } else if (e.target.id === "btn2") {
    document.body.style.backgroundColor = "#e5e5e5";
  } else if (e.target.id === "btn3") {
    document.body.style.backgroundColor = "#83c5be";
  }
});
