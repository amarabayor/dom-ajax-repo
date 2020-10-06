//Write code here to communicate with Github
function fetchGithubEndpoint(endpoint) {
  const githubAPIBaseURL = "https://api.github.com";
  fetch(`${githubAPIBaseURL}${endpoint}`)
    .then(function(response) {
      console.log(response.status);
      return response.json();
    })
    .then(function(repositories) {
      console.log(repositories);
      const reposList = document.getElementById("repos-list");

      for (let i = 0; i < repositories.length; i++) {
        const repository = repositories[i];
        let a = document.createElement("a");
        const repositoryElement = document.createElement("li");
        a.setAttribute("href", repository.html_url);
        a.innerText = repository.name;
        repositoryElement.appendChild(a);
        reposList.appendChild(repositoryElement);
      }
    });
}
const userName = "amarabayor";
fetchGithubEndpoint(`/users/${userName}/repos`);
// window.onload = main;
// function main() {
//     let reposList = document.getElementById("repos-list");
//     reposList.innerHTML = "";
//     let listOfRepo = getListofRepo("amarabayor");
//     listOfRepo.then(res => {
//       res.forEach(item => {
//         let li = document.createElement("li");
//         li.innerText = item;
//         reposList.appendChild(li);
//       });
//     });
// }
// /**
//  * Get list of user repository Name
//  *
//  * @param {string} user
//  * @return {Array} List on Repo name
//  */
// function getListofRepo(user = "amarabayor") {
//     return fetch("https://api.github.com/users/" + user + "/repos")
//       .then(resp => {
//         return resp.json();
//       })
//       .then(data => {
//         return data.map(item => {
//           return item.name;
//         });
//       });
// }
