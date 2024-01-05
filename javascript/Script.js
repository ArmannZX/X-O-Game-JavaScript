const B = document.getElementsByClassName("B");

const Box = {
  B1: B[0].innerHTML,
  B2: B[1].innerHTML,
  B3: B[2].innerHTML,
  B4: B[3].innerHTML,
  B5: B[4].innerHTML,
  B6: B[5].innerHTML,
  B7: B[6].innerHTML,
  B8: B[7].innerHTML,
  B9: B[8].innerHTML,
};
let IsTurn = "X";

for (i = 0; i < B.length; i++) {
  B[i].addEventListener("mousedown", function (event) {
    let Sound = new Audio("Sounds/Sound.wav");
    Sound.play();
    if (event.target.isClicked !== true) {
      if (IsTurn == "X") {
        event.target.isClicked = true;
        event.target.innerHTML = IsTurn;
        event.target.style.color = "red";
        IsTurn = "O";
      } else {
        event.target.isClicked = true;
        event.target.innerHTML = IsTurn;
        event.target.style.color = "blue";
        IsTurn = "X";
      }
    }
  });
}
for (i = 0; i < B.length; i++) {
  B[i].addEventListener("mouseup", function () {
    console.log(Box.B1 == "X" && Box.B2 == "X" && Box.B3 == "X");
    console.log(Box.B1)
    console.log(Box.B2)
    console.log(Box.B3)
  });
}
function DidWon() {
  if (Box.B1 == "X" && Box.B2 == "X" && Box.B3 == "X") {
    window.alert("X" + "Has Won");
    console.log(WinEvent);
  }
}
