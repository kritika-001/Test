document.getElementById("heading").innerHTML =
  localStorage["title"] || "Online text editor"; // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || "all this is being saved locally"; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);