
function preload(){
  let click = new Audio("sound/click.mp3");
}

function clickSound(){
  click.play();
}


function movie() {
  document.getElementById("outsideblure").classList.remove("hide");
  setTimeout(function () {
    outside();
  }, 1000);
}

let getAxe = false;
let axeUse = false;
let previousRoom;

function outside() {
  hideall();
  document.getElementById("outside").classList.remove("hide");
}

function graveyard() {
  hideall();
  document.getElementById("graveyard").classList.remove("hide");
  previousRoom = "outside";
  if (getAxe == true) {
    document.getElementById("axe").onclick = function () {usingAxe()  };
  }
}

function lobby() {
  hideall();
  document.getElementById("lobby").classList.remove("hide");
  previousRoom = "outside";
}

function axe_room() {
  hideall();
  document.getElementById("axe_room").classList.remove("hide");
  previousRoom = "lobby";
  if (getAxe == false) {
    document.getElementById("axe").classList.remove("hide");
    document.getElementById("axe").onclick = function () {
      clickSound()
      getAxe = true;
      document.getElementById("axe").classList.remove("axe");
      document.getElementById("axe").classList.add("axe_inventory");
    };
  }
}

function axe() {
  hideall();
  document.getElementById("axe_room").classList.remove("hide");
}

function usingAxe() {
  document.getElementById("axe").classList.add("hide");
  let axeUse = true;
}

function back() {
  window[previousRoom](arguments);
}

function hideall() {
  document.getElementById("lobby").classList.add("hide");
  document.getElementById("outside").classList.add("hide");
  document.getElementById("outsideblure").classList.add("hide");
  document.getElementById("graveyard").classList.add("hide");
  document.getElementById("axe_room").classList.add("hide");
}


