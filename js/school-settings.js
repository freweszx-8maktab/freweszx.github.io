// получаем данные из LocalStorage, если есть
window.onload = function(){
    if(localStorage.getItem("schoolInfo")){
        let info = JSON.parse(localStorage.getItem("schoolInfo"))
        document.getElementById("schoolName").value = info.name
        document.getElementById("schoolAddress").value = info.address
        document.getElementById("schoolPhone").value = info.phone
        document.getElementById("schoolEmail").value = info.email
        document.getElementById("schoolDesc").value = info.desc
    }
}

function saveSchoolInfo(){
    let info = {
        name: document.getElementById("schoolName").value,
        address: document.getElementById("schoolAddress").value,
        phone: document.getElementById("schoolPhone").value,
        email: document.getElementById("schoolEmail").value,
        desc: document.getElementById("schoolDesc").value
    }
    localStorage.setItem("schoolInfo", JSON.stringify(info))
    alert("✅ Информация о школе сохранена!")
}