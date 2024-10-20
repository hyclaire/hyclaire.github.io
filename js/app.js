/*
1. 실시간 시계
2. 로컬 스토리지를 사용한 로그인
3. 로컬 스토리지를 사용한 투두리스트
4. 랜덤 배경 이미지
5. 날씨와 위치 (geolocation)
6. 여러분의 CSS 실력을 뽐내주세요💖
*/

//const loginForm = document.getElementById("login-form");
// document.querySelector("#login-form")
// querySelector can search by class id, class name, tag name so it needs to specify exactly
// but =getElementByID is looking for ID only, so no need to think about it
// this case, we'll be using ID
// OR we can use querySelector directly to access input and button like below

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnClick() {
    //console.log("click!");
    console.log(loginInput.value);
    const username = loginInput.value;
    // if (username === "") {
    //     console.log("Please write your name.");
    // } else if (username.length > 15) {
    //     alert("Your name is too long.");
    // }
}

function onLoginSubmit(event) {
    event.preventDefault();//This stops the default behavior of any event
    // To prevent refreshing after submitting the form which is the default behavior of the browser
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // save the username 
    //greeting.innerText = "Hello " + username;
    //greeting.innerText = `Hello ${username}`;
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    // made to function
    paintGreetings();

    //console.log(username);
    // Originally without event.preventDefault, the log showed up and disappeared because it was refreshed
    // But, with event.preventDefault, the log stays on the console 
    console.log(event);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("clicked");
}

//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click", handleLinkClick);


function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
// We can check the localStorage on the Application of Inspect of the Website
console.log(savedUserName);

if (savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings();
}