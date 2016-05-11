var stepBtns = document.querySelectorAll(".tour--step");
var stepWidth = "";
var pageWidth = 960;

(function() {
  stepWidth = 100 / stepBtns.length + "%";

  for (i = 0; i < stepBtns.length; ++i) {
    stepBtns[i].style.width = stepWidth;
  }
})();


var mainContent = document.getElementById("content");

console.log(mainContent);

function move(moveTo) {
  mainContent.style.left = -moveTo * pageWidth + "px";
}