"use strict";

function createRC() {
  //erstelle ein Array
  const randomHexcode = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];

  //das random Element 6 mal generieren
  let randomAusgabe = "";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * randomHexcode.length);
    const randomElement = randomHexcode[random];
    randomAusgabe += randomElement;
  }

  const text = document.querySelector(".container__text");
  text.textContent = "#" + randomAusgabe;

  //Hintergrund Farbe von dem Body
  document.body.style.backgroundColor = "#" + randomAusgabe;

  //Textfarbe von dem Button
  const btnColor = document.querySelector("button");
  btnColor.style.color = "#" + randomAusgabe;
}

//function aufrufen
createRC();
