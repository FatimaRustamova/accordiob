let icon = document.querySelectorAll("#btn");
let div = document.querySelectorAll("#div");

icon.forEach(item=>{
    item.addEventListener("click", function() {
        let k = this.nextElementSibling;
        k.classList.toggle("none");
    })
})