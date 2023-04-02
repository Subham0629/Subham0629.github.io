let sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
var typed = new Typed(".typing", {
  strings: ["Full Stack Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})
let resume1 = document
  .getElementById("resume-link-1")
   .addEventListener("click",opendrive);

  let resume2 = document
  .getElementById("resume-link-2")
  .addEventListener("click",opendrive);

function opendrive(){
  window.open(
    (href =
      "https://drive.google.com/file/d/1B3Tdzax-cE-dd75tsRg2-gUTBD2c5wpN/view?usp=share_link")
  );
 }

