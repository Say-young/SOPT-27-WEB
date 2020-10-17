//서버와 통신하는 URL
const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");

//submit 이벤트가 발생할 경우 작동되는 함수
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = input.value;

    if(user){
        getUser(user);
        input.value="";
    }
});

//서버에서 입력값에 해당하는 정보 받아오기
const getUser = async (username) => {
    const response = await fetch(API_URL + username);
    const responseData = await response.json();
    
    createUserCard(responseData); //서버에서 받아온 값을 넣어줘야 한다.
    getRepos(username);
};

//서버에서 레포 관련 정보 받아오기
const getRepos = async (username) => {
    const response = await fetch(API_URL + username + "/repos");
    const responseData = await response.json();

    addReposToCard(responseData);
};

//받아온 레포 목록들을 a 태그로 생성하기
const addReposToCard = (repos) => {
    const reposEl = document.getElementById("repos");

    repos.slice(0, 10).forEach((repo) => {
        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");
    
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;
    
        /**
         * <a class="repo" href={repo.html_url} target="_black">{repo.name}</a>
         */
        reposEl.appendChild(repoEl);
      });
};

//화면에 정보를 보여주는 부분
const createUserCard = (user) => {
    const cardHTML = `
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li><strong>Followers</strong>${user.followers}</li>
          <li><strong>Following</strong>${user.following}</li>
          <li><strong>Repos</strong>${user.public_repos}</li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;

    main.innerHTML = cardHTML;
}