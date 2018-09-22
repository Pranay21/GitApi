import css from "./style.css";
//import styles from "./style.css";

const contain = document.querySelector("#git-form");
const user = contain.querySelector("#git-search-input");

const API_KEY = "72d2d6f54dfbd95ab937b61627e77a2fe05485a9";

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

gitCollection();
