AOS.init();

const enlaces = document.getElementsByClassName("board")[0];
const toogle = document.getElementsByClassName("toogle")[0];
const menutoogle = document.getElementById("menutoogle");
let abierto = false;

const toogleMenu = () => {
  enlaces.classList.toggle("board2");
  enlaces.style.transition = "transform 0.5s ease-in-out";
};

toogle.addEventListener("click", function () {
  toogleMenu();
  if (document.querySelector(".board.board2")) {
    abierto = true;
  } else {
    abierto = false;
  }
});

window.addEventListener("click", function (e) {
  this.console.log(e.target);
  if (abierto) {
    if (e.target !== menutoogle) {
      toogleMenu();
      abierto = false;
    }
  }
});

window.addEventListener("resize", function () {
  if (screen.width > 927) {
    if (abierto) {
      toogleMenu();
      enlaces.style.transition = "none";
      abierto = false;
    }
  }
});
