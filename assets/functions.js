function hideBtn() {
  var x = document.getElementById("mid-content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function enableMsc() {
  var x = document.getElementById("bg-video");
  x.muted = false;
}
function slideVol() {
  var x = document.getElementById("volRange");
  var y = document.getElementById("bg-video");
  y.muted = false;
  y.volume = x.value/100;
}
function changeVid() {
  var x = document.getElementById("video-select");
  var y = document.getElementById("bg-video");
  y.src = x.value;
  console.log(y.src);
}