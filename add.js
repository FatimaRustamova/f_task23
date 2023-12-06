let form = document.querySelector(".form");
let image = document.querySelector("#image");
let name = document.querySelector("#name");
let category = document.querySelector("#category");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let obj = {};
    let src = image.files[0];
    const reader = new FileReader();
    reader.onload = (e)=>{
        obj = {
            image : e.target.result,
            name : name.value,
            category : category.value
        }
        axios.post("http://localhost:3000/robots", obj);
    }
    reader.readAsDataURL(src);
    window.location = "./index.html";
})