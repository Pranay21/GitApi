const API_KEY = "b6617accdf9160a38f4b748a439b0975291a55ff";

const contain = document.querySelector("#git-form");
const contain2 = document.querySelector("#container2");
const user = contain.querySelector("#git-search-input");

const fetchGifs = url => {
  return fetch(url).then(res => res.json());
};

export const gitCollection = () => {
  contain.addEventListener("submit", e => {
    e.preventDefault();
    const username = user.value;
    fetchGifs(
      `https://api.github.com/users/${username}/repos?access_token=${API_KEY}`
    ).then(data => {
      data.map(data2 => {
        var para = document.createElement("p");
        const temp = document.querySelector("#container2");
        para.innerText = data2.name;
        temp.appendChild(para);
      });
    });
    const temp = gitCollection();
    return temp;
  });
};
