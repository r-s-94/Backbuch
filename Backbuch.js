//  1 Ausführung

let number;

function check() {
  number = document.getElementById("number");
  switch (number.value) {
    case "1":
      Pfannkuchen();
      resetInput();

      break;

    case "2":
      Waffeln();
      resetInput();

      break;

    case "3":
      Käsekuchen();
      resetInput();

      break;

    default:
      break;
  }
}

function Pfannkuchen() {
  document.getElementsByClassName("Pfannkuchen")[0].style.display = "block";
  document.getElementsByClassName("Waffeln")[0].style.display = "none";
  document.getElementsByClassName("Käsekuchen")[0].style.display = "none";
}

function Waffeln() {
  document.getElementsByClassName("Pfannkuchen")[0].style.display = "none";
  document.getElementsByClassName("Waffeln")[0].style.display = "block";
  document.getElementsByClassName("Käsekuchen")[0].style.display = "none";
}

function Käsekuchen() {
  document.getElementsByClassName("Pfannkuchen")[0].style.display = "none";
  document.getElementsByClassName("Waffeln")[0].style.display = "none";
  document.getElementsByClassName("Käsekuchen")[0].style.display = "block";
}

function resetInput() {
  number.value = "";
}

//  2 Ausführung

function selection(pastry) {
  let div = document.getElementsByClassName("div");

  for (let i = 0; i < div.length; i++) {
    div[i].style.display = "none";
  }
  document.getElementById(pastry).style.display = "block";
}
