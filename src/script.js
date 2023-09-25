/*-------------------collapsible-------------------------*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/*---------------toggle for product product diplay page-----*/
let mainImage = document.getElementById("main-image")
let smallImage = document.getElementsByClassName("small-image")

smallImage[0].onclick = ()=>{
  mainImage.src = smallImage[0].src
}

smallImage[1].onclick = ()=>{
  mainImage.src = smallImage[1].src
}

