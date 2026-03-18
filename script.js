console.log("eMaktab clone работает");

// Пример: клик по предмету
document.querySelectorAll(".lesson").forEach(el => {
  el.addEventListener("click", () => {
    alert("Открыть урок");
  });
});
let links = document.querySelectorAll(".sidebar a")

links.forEach(link => {
link.addEventListener("click", function(){
links.forEach(l => l.classList.remove("active"))
this.classList.add("active")
})
})
let user = JSON.parse(localStorage.getItem("currentUser"))

if(!user){
window.location.href = "login.html"
}

document.getElementById("userName").innerText = user.name + " (" + user.role + ")"
let user = JSON.parse(localStorage.getItem("currentUser"))

if(!user){
window.location.href = "login.html"
}

// проверка страницы
let page = window.location.pathname

if(page.includes("teacher") && user.role !== "teacher"){
alert("Нет доступа")
window.location.href = "index.html"
}

if(page.includes("admin") && user.role !== "admin"){
alert("Нет доступа")
window.location.href = "index.html"
}
let nameBlock = document.getElementById("userName")

if(nameBlock){
nameBlock.innerText = user.name + " | " + user.role
}
// переключение вкладок
function showTab(tab){
    document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
    document.getElementById(tab).classList.add('active');
    document.querySelectorAll('.sidebar ul li').forEach(li=>li.classList.remove('active'));
    event.target.classList.add('active');
}

// данные учеников
let students = [
    {name:'Алишер',login:'alisher',pass:'1234',grades:[5,4,5,3,4,5,4,5,5,4,5,5],homework:['Математика: выполнено','Физика: нет']},
    {name:'Малика',login:'malika',pass:'abcd',grades:[4,4,5,5,4,3,5,5,4,4,5,4],homework:['Биология: выполнено','История: нет']}
];

// заполнение таблицы оценок
function renderGrades(){
    let tbody = document.getElementById('gradesBody');
    tbody.innerHTML = '';
    students.forEach(st=>{
        let row = '<tr><td>'+st.name+'</td>';
        st.grades.forEach(g=>row+='<td contenteditable="true">'+g+'</td>');
        row+='</tr>';
        tbody.innerHTML+=row;
    });
}

// заполнение учеников
function renderStudents(){
    let tbody = document.getElementById('studentsBody');
    tbody.innerHTML = '';
    students.forEach((st,i)=>{
        tbody.innerHTML += `<tr>
            <td>${st.name}</td>
            <td>${st.login}</td>
            <td>${st.pass}</td>
            <td><button onclick="viewStudent(${i})">Просмотр</button></td>
        </tr>`;
    });
}

function addStudent(){
    let name = prompt('Имя ученика:');
    let login = prompt('Логин:');
    let pass = prompt('Пароль:');
    if(name && login && pass){
        students.push({name:name,login:login,pass:pass,grades: Array(12).fill(''),homework:[]});
        renderGrades();
        renderStudents();
    }
}

function viewStudent(i){
    let st = students[i];
    alert(`Ученику: ${st.name}\nЛогин: ${st.login}\nПароль: ${st.pass}\nДЗ: ${st.homework.join('\n')}`);
}

// при загрузке
window.onload = function(){
    renderGrades();
    renderStudents();
}