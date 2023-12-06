// const over = document.querySelectorAll("#over");
// const dropdown = document.querySelectorAll(".dropdown");

// const myFunc = ()=> {
//     over.addEventListener("mouseover", ()=>{
//         dropdown.style.display = "block";
//     })
// }

// setTimeout(myFunc, 3000);

let nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>100){
        nav.style.backgroundColor = "rgba(138, 144, 255, 0.9)";
    }
    else{
        nav.style.backgroundColor = "";
    }
})

let divs = document.querySelector(".divs");

fetch("http://localhost:3000/robots")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        divs.innerHTML += `
        <div class="crab">
        <div class="up">
            <img src="${element.image}">
        </div>
        <div class="down">
            <h3>${element.name}</h3>
            <p>${element.description}</p>
            <button><a href="./details.html?id=${element.id}">View Details</a></button>
            <button onclick="deleteRobot(${element.id})">Delete</button>
        </div>
    </div>`
    });
})

function deleteRobot(id){
    axios.delete(`http://localhost:3000/robots/${id}`);
    window.location.reload();
}

let icon = document.querySelector("#i");
let modal = document.querySelector(".modal");
let click = document.querySelector(".i");
let down = document.querySelector("#down");
let dropdown = document.querySelectorAll('.dropdown');

icon.addEventListener("click", ()=>{
    modal.style.display = "flex";
})

click.addEventListener("click", ()=>{
    modal.style.display = "";
})

modal.addEventListener("click", (e)=>{
    if(e.target == modal){
        modal.style.display = "";
    }
})

down.addEventListener("click", ()=>{
    dropdown.style.display = "block";
})

let storm = document.querySelector(".storm");

storm.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})