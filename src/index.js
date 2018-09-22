import css from "./style.css";
//import styles from "./style.css";

import { githeader } from "./header";

const contain = document.querySelector("#git-form");
const contain2 = document.querySelector("#container2");
const user = contain.querySelector("#git-search-input");
const header = contain2.querySelector("#h3-id");

const API_KEY = "48dba4b4f226804a76e7939d80f1918dc4ccdad2";

const fetchGifs = url => {
  return fetch(url).then(res => res.json());
};

const gitCollection = () => {
  contain.addEventListener("submit", e => {
    e.preventDefault();
    const username = user.value;
    fetchGifs(
      `https://api.github.com/users/${username}/repos?access_token=${API_KEY}`
    ).then(data => {
      console.log(data.name);
      data.map(data2 => {
        var para = document.createElement("p");
        const temp = document.querySelector("#container2");
        para.innerText = data2.name;
        temp.appendChild(para);
      });
    });
  });
};

header.innerText = githeader();
gitCollection();
