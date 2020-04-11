var pics = [
  "images/photo-1.jpeg",
  "images/photo-2.jpeg",
  "images/photo-3.jpeg",
  "images/photo-4.jpeg",
  "images/photo-5.jpeg",
  "images/photo-6.jpeg",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function () {
  if (counter === pics.length) {
    counter = 0;
  }
  img.src = pics[counter];

  counter = counter + 1;
});
