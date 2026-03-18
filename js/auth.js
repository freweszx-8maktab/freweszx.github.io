// регистрация
function register(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value
let role = document.getElementById("role").value

if(!name || !email || !password){
alert("Заполни все поля")
return
}

let user = {
name,
email,
password,
role
}

localStorage.setItem("user_" + email, JSON.stringify(user))

alert("Аккаунт создан!")
window.location.href = "login.html"
}


// вход
function login(){

let email = document.getElementById("loginEmail").value
let password = document.getElementById("loginPassword").value

let user = JSON.parse(localStorage.getItem("user_" + email))

if(!user){
alert("Пользователь не найден")
return
}

if(user.password !== password){
alert("Неверный пароль")
return
}

localStorage.setItem("currentUser", JSON.stringify(user))

// 🔥 редирект по роли
if(user.role === "student"){
window.location.href = "index.html"
}
else if(user.role === "teacher"){
window.location.href = "teacher.html"
}
else if(user.role === "admin"){
window.location.href = "admin.html"
}

}


// выход
function logout(){
localStorage.removeItem("currentUser")
window.location.href = "login.html"
}