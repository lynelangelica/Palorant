const menu = document.getElementById("menu");

const ham = document.getElementById("hamburger");

var isActive = false;

ham.addEventListener ("click", () =>{
    // ham.classList.toggle;
    if(!isActive){
        menu.classList.add("active");
        menu.classList.remove("inactive");
        isActive = !isActive;
    }else{
        menu.classList.add("inactive");
        menu.classList.remove("active");
        isActive = !isActive;
    }

    ham.classList.toggle;
});