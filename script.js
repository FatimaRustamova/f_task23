// const over = document.querySelectorAll("#over");
// const dropdown = document.querySelectorAll(".dropdown");

// const myFunc = ()=> {
//     over.addEventListener("mouseover", ()=>{
//         dropdown.style.display = "block";
//     })
// }

// setTimeout(myFunc, 3000);

let nav = document.querySelector("nav");
let page = 4;

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.style.backgroundColor = "rgba(138, 144, 255, 0.9)";
    }
    else {
        nav.style.backgroundColor = "";
    }
})

let divs = document.querySelector(".divs");

function showData(){
    fetch("http://localhost:3000/robots")
        .then(res => res.json())
        .then(data => {
            data.slice(page - 4, page).forEach(element => {
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
            <button onclick="updateRobot(${element.id})">Update</button>
        </div>
    </div>`
            });
        })
}

showData();

function deleteRobot(id) {
    axios.delete(`http://localhost:3000/robots/${id}`);
    window.location.reload();
}

let icon = document.querySelector("#i");
let modal = document.querySelector(".modal");
let click = document.querySelector(".i");
let down = document.querySelector("#down");
let dropdown = document.querySelectorAll('.dropdown');

icon.addEventListener("click", () => {
    modal.style.display = "flex";
})

click.addEventListener("click", () => {
    modal.style.display = "";
})

modal.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "";
    }
})

down.addEventListener("click", () => {
    dropdown.style.display = "block";
})

let storm = document.querySelector(".storm");

storm.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

let update = document.querySelector(".update");
let icon2 = document.querySelector("#icon2")

function updateRobot() {
    update.style.display = "flex";
}

icon2.addEventListener("click", () => {
    update.style.display = "";
})

update.addEventListener("click", (e) => {
    if (e.target == update) {
        update.style.display = "";
    }
})

let load = document.querySelector("#load");

load.addEventListener("click", () => {
    page += 4;
    showData();
    event.target.style.display= "none";
    ret.style.display = "flex";
})
