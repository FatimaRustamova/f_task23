let id = new URLSearchParams(window.location.search).get("id");
let num = document.querySelector(".num");

fetch(`http://localhost:3000/robots/${id}`)
.then(res=>res.json())
.then(data =>{
    num.innerHTML += `
    <div class="crab">
    <div class="up">
        <img src="${data.image}">
    </div>
    <div class="down">
        <h3>${data.name}</h3>
        <p>${data.description}</p>
    </div>
</div>
    `
})