/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // write your code here
  console.log("Hello Rigo from the console!");
};
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com"];

pronoun.forEach(pronombre => {
  adj.forEach(adjetivo => {
    noun.forEach(nombre => {
      ext.forEach(extension => {
        console.log(`${pronombre}${adjetivo}${nombre}${extension}`);
      });
    });
  });
});
const validate = document.querySelector("#validate");

validate.addEventListener("click", function(evento) {
  let inputValue = document.getElementById("dominio").value;
  kack(inputValue);
});
function kack(inputValue) {
  var dominio = ["luna", "paz", "comicom", "ios"];

  var ext = ["ve", "es", "com", "net", "et"];
  let dominios = [];
  let hack = [];

  ext.forEach(eExtension => {
    const size = eExtension.length && eExtension.length;
    if (inputValue.substr(-size, size) === eExtension) {
      console.log(`${inputValue.slice(0, -size)}.${eExtension}`);
      hack = hack.concat(` ${inputValue.slice(0, -size)}.${eExtension}`);
    } else {
      dominios = dominios.concat(` ${inputValue}.${eExtension}`);
      console.log(`${inputValue}.${eExtension}`);
    }
  });
  if (inputValue) {
    var elemento = document.getElementById("dominioResult");
    elemento.className += " alert alert-primary";
    document.getElementById("dominioResult").innerHTML = dominios;
    document.getElementById("dominioTitulo").innerHTML = "Dominios Disponibles";
  }
  if (hack.length !== 0) {
    var elemento = document.getElementById("hackResult");
    elemento.className += " alert alert-info";
    document.getElementById("hackTitulo").innerHTML = "Hack de dominio";
    document.getElementById("hackResult").innerHTML = hack;
  }
}
