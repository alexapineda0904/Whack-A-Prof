const holesdiv  = document.querySelector(".holes");
for(let i = 1; i <= 9;i++){
    let hole = document.createElement("div")
    hole.classList.add("hole")
    holesdiv.appendChild(hole);

}
