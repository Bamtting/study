var num = 1;
function buttonL(idx) {
  if (idx) {
    if (num == 4) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  var imgTag = document.getElementById("img");
  imgTag.setAttribute("src", "images/pic-" + num + ".jpg");
}