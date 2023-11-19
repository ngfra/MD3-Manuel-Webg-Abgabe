"use strict";
//variable erstellen und Template String
let vorname = "Ngoc";
const h1 = document.querySelector('h1');
h1.textContent = `Todos von ${vorname}`;

//das zweite Listenelement auswählen und neue Klasse 
const seLi = document.querySelector('ul').children[1];
seLi.classList.add('done');
seLi.style.textDecoration = 'line-through';

//ein neues <Li> erstellen & Hintergrundfarbe ändern
const neuLi = document.createElement('li');
neuLi.textContent = 'Javascript Aufgabe von der Jessi machen';
const meineListe = document.querySelector('ul');
meineListe.appendChild(neuLi);
neuLi.style.backgroundColor = 'red';

//das erste Listenelement löschen
const frLi = document.querySelector('ul').children[0];
frLi.remove();