// пример данных пользователей
let users = [
    {name:"Али", email:"ali@mail.com", role:"Ученик", status:"🟢 Онлайн"},
    {name:"Иван", email:"ivan@mail.com", role:"Учитель", status:"🟢 Онлайн"},
    {name:"София", email:"sofia@mail.com", role:"Админ", status:"🔴 Оффлайн"},
];

// отобразить таблицу
function renderUsers(){
    let table = document.getElementById("userTable")
    // очищаем все кроме заголовка
    table.innerHTML = `
    <tr>
        <th>Имя</th>
        <th>Email</th>
        <th>Роль</th>
        <th>Статус</th>
        <th>Действия</th>
    </tr>`

    users.forEach((u, i) => {
        let row = table.insertRow()
        row.innerHTML = `
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.role}</td>
            <td>${u.status}</td>
            <td>
                <button onclick="editUser(${i})">✏️</button>
                <button onclick="deleteUser(${i})">🗑️</button>
            </td>
        `
    })
}

// добавить пользователя
function addUser(){
    let name = prompt("Имя:")
    let email = prompt("Email:")
    let role = prompt("Роль: Ученик/Учитель/Админ")
    if(name && email && role){
        users.push({name,email,role,status:"🟢 Онлайн"})
        renderUsers()
    }
}

// редактировать пользователя
function editUser(index){
    let u = users[index]
    let name = prompt("Имя:", u.name)
    let role = prompt("Роль:", u.role)
    if(name && role){
        u.name = name
        u.role = role
        renderUsers()
    }
}

// удалить пользователя
function deleteUser(index){
    if(confirm("Удалить пользователя?")){
        users.splice(index,1)
        renderUsers()
    }
}

// поиск
document.getElementById("searchUser").addEventListener("input", function(){
    let query = this.value.toLowerCase()
    let filtered = users.filter(u => u.name.toLowerCase().includes(query) || u.email.toLowerCase().includes(query))
    let table = document.getElementById("userTable")
    table.innerHTML = `
    <tr>
        <th>Имя</th>
        <th>Email</th>
        <th>Роль</th>
        <th>Статус</th>
        <th>Действия</th>
    </tr>`
    filtered.forEach((u, i) => {
        let row = table.insertRow()
        row.innerHTML = `
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.role}</td>
            <td>${u.status}</td>
            <td>
                <button onclick="editUser(${i})">✏️</button>
                <button onclick="deleteUser(${i})">🗑️</button>
            </td>
        `
    })
})

renderUsers()