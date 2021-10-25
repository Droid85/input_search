const btnEl = document.querySelector('#btn');
const inputEl = document.querySelector('.search-input');
const outputEl = document.querySelector('#output');

let userLogin = '/';

const ENVIROMENT = {
    getPost: '/users',
}

class HttpServise {
    static API = 'https://api.github.com';
    ERROR = '404 USER NOT FOUND';

    get(url) {
        return axios.get(`${HttpServise.API}${ENVIROMENT.getPost}${url}`);
    }

}

const httpService = new HttpServise();

btnEl.addEventListener('click', onClickBtn);

function onClickBtn (e) {
    let userData = {};
    userLogin += inputEl.value;
    httpService.get(userLogin).then((r) => {
        Object.assign(userData, r.data);
        renderData(userData);
    })
    .catch(error => alert(`${httpService.ERROR}`));
    clearData();
}

function renderData(data) {
    outputEl.insertAdjacentHTML('beforeend', `<img src="${data.avatar_url}">`);
    outputEl.insertAdjacentHTML('beforeend', `<div>Public repositories: ${data.public_repos}</div>`);
    outputEl.insertAdjacentHTML('beforeend', `<div>Followers: ${data.followers}</div>`);
    outputEl.insertAdjacentHTML('beforeend', `<div>Following: ${data.following}</div>`);
}

function clearData() {
    inputEl.value = '';
    userLogin = '/'
}
