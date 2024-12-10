import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "your"];
let adj = ["great", "big", "unforgettable"];
let noun = ["jogger", "racoon", "alpinist"];

window.onload = function(domainGenerator) {
  //write your code herenode app.js
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++)
        console.log(pronoun[p] + adj[a] + noun[n] + ".com");
    }
  }
};
