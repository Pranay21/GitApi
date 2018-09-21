const contain = document.querySelector("#git-form");
const user = contain.querySelector("#git-search-input");

const API_KEY = "7626b6c20290bf144b1a3283acc48d5e76e7b453";

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
      console.log(data[0].name);
      data.filter(data => {
        var para = document.createElement("p");
        const temp = document.querySelector("#container2");
        para.innerText = data.name;
        temp.appendChild(para);
      });
    });
  });
};

gitCollection();
