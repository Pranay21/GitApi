const API_KEY = "8fe4124e6f202d14f28abe30f05f167c1252ccc2";

const contain = document.querySelector("#git-form");
const contain2 = document.querySelector("#container2");
const user = contain.querySelector("#git-search-input");

const fetchGifs = url => {
  return fetch(url)
    .then(res => res.json())
    .catch(displayError);
};

function displayError(err) {
  const errorP = document.createElement("p");
  errorP.innerText = err.message;

  contain2.innerHTML = "";
  contain2.appendChild(errorP);
}

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
