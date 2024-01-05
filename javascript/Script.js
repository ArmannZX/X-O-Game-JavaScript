const B = document.getElementsByClassName("B");
const MainBox = document.getElementById("box");
const Reset = document.getElementById("Reset");
let IsTurn = "X";
const Moves = {
  X: "X",
  O: "O",
};

const Tables = {
  Table1: B[0],
  Table2: B[1],
  Table3: B[2],
  Table4: B[3],
  Table5: B[4],
  Table6: B[5],
  Table7: B[6],
  Table8: B[7],
  Table9: B[8],
};
MainBox.addEventListener("mousedown", function (event) {
  let Sound = new Audio("Sounds/Sound.wav");
  Sound.play();
  if (event.target.isClicked !== true) {
    if (IsTurn == "X") {
      event.target.isClicked = true;
      event.target.innerHTML = Moves.X;
      ToWIN(Moves.X);
      event.target.style.color = "red";
      IsTurn = "O";
    } else {
      event.target.isClicked = true;
      event.target.innerHTML = Moves.O;
      event.target.style.color = "blue";
      ToWIN(Moves.O);
      IsTurn = "X";
    }
  }
});

function ToWIN(Winner) {
  if (
    Tables.Table1.innerHTML == Winner &&
    Tables.Table2.innerHTML == Winner &&
    Tables.Table3.innerHTML == Winner
  ) {
    CallWin(Winner, Tables.Table1, Tables.Table2, Tables.Table3);
  } else if (
    Tables.Table4.innerHTML == Winner &&
    Tables.Table5.innerHTML == Winner &&
    Tables.Table6.innerHTML == Winner
  ) {
    CallWin(Winner, Tables.Table4, Tables.Table5, Tables.Table6);
  } else if (
    Tables.Table7.innerHTML == Winner &&
    Tables.Table8.innerHTML == Winner &&
    Tables.Table9.innerHTML == Winner
  ) {
    CallWin(Winner, Tables.Table7, Tables.Table8, Tables.Table9);
  } else if (
    Tables.Table1.innerHTML == Winner &&
    Tables.Table4.innerHTML == Winner &&
    Tables.Table7.innerHTML == Winner
  ) {
    CallWin(Winner, Tables.Table1, Tables.Table4, Tables.Table7);
  } else if (
    Tables.Table2.innerHTML == Winner &&
    Tables.Table5.innerHTML == Winner &&
    Tables.Table8.innerHTML == Winner
  ) {
    CallWin(Winner, Tables.Table2, Tables.Table5, Tables.Table8);
  } else if (
    Tables.Table3.innerHTML == Winner &&
    Tables.Table6.innerHTML == Winner &&
    Tables.Table9.innerHTML == Winner
  ) {
    CallWin(Winner, Tables.Table3, Tables.Table6, Tables.Table9);
  } else if (
    Tables.Table1.innerHTML == Winner &&
    Tables.Table5.innerHTML == Winner &&
    Tables.Table9.innerHTML == Winner
  ) {
    CallWin(Winner, Tables.Table1, Tables.Table5, Tables.Table9);
  } else if (
    Tables.Table3.innerHTML == Winner &&
    Tables.Table5.innerHTML == Winner &&
    Tables.Table7.innerHTML == Winner
  ) {
    CallWin(Winner, Tables.Table3, Tables.Table5, Tables.Table7);
  }

  if (
    Tables.Table1.innerHTML !== "" &&
    Tables.Table2.innerHTML !== "" &&
    Tables.Table3.innerHTML !== "" &&
    Tables.Table4.innerHTML !== "" &&
    Tables.Table5.innerHTML !== "" &&
    Tables.Table6.innerHTML !== "" &&
    Tables.Table7.innerHTML !== "" &&
    Tables.Table8.innerHTML !== "" &&
    Tables.Table9.innerHTML !== ""
  ) {
    window.alert("TIE");
  }
}

function CallWin(Winner, HighlightTable1, HighlightTable2, HighlightTable3) {
  window.alert("'" + Winner + "'  Won ");
  for (i = 0; i < B.length; i++) {
    B[i].isClicked = true;
  }
  HighlightTable1.classList.toggle("HighlightWinner");
  HighlightTable2.classList.toggle("HighlightWinner");
  HighlightTable3.classList.toggle("HighlightWinner");
}

Reset.addEventListener("click", function () {
  let Sound = new Audio("Sounds/Sound2.wav");
  Sound.play();
  for (i = 0; i < B.length; i++) {
    B[i].isClicked = false;
  }
  Tables.Table1.innerHTML = "";
  Tables.Table2.innerHTML = "";
  Tables.Table3.innerHTML = "";
  Tables.Table4.innerHTML = "";
  Tables.Table5.innerHTML = "";
  Tables.Table6.innerHTML = "";
  Tables.Table7.innerHTML = "";
  Tables.Table8.innerHTML = "";
  Tables.Table9.innerHTML = "";

  Tables.Table1.classList.remove("HighlightWinner");
  Tables.Table2.classList.remove("HighlightWinner");
  Tables.Table3.classList.remove("HighlightWinner");
  Tables.Table4.classList.remove("HighlightWinner");
  Tables.Table5.classList.remove("HighlightWinner");
  Tables.Table6.classList.remove("HighlightWinner");
  Tables.Table7.classList.remove("HighlightWinner");
  Tables.Table8.classList.remove("HighlightWinner");
  Tables.Table9.classList.remove("HighlightWinner");
});
