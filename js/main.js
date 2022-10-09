// 현재시간 표시 기능 
document.getElementById("time").innerHTML = new Date().toISOString();

function pink() {
  document.body.style.backgroundColor = "pink";
}
function lightblue() {
  document.body.style.backgroundColor = "lightblue";
}
function yellow() {
  document.body.style.backgroundColor = "yellow";
}
function reset() {
  document.body.style.backgroundColor = "linen";
}

function showhtml() {
  document.getElementById("fig").src = "img/html5.png";
  document.getElementById("desc").innerHTML = "HTML은 구조적 웹문서를 작성하는데 사용되는 마크업 언어이다."
}
function showcss() {
  document.getElementById("fig").src = "img/css3.png";
  document.getElementById("desc").innerHTML = "CSS는 HTML 문서의 스타일을 지정하기 위한 언어이다."
}
function showjs() {
  document.getElementById("fig").src = "img/javascript.png";
  document.getElementById("desc").innerHTML = "Javascript는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다."
}
function hide() {
  document.getElementById("fig").src = "";
  document.getElementById("desc").innerHTML = "";
}