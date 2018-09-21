const contain = document.querySelector("#git-form");
const user = contain.querySelector("#git-search-input");

const API_KEY = "03e107284b46e360508cfb17b35aaceb62f81cd1";

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
      console.log(data);
    });
  });
};

gitCollection();
