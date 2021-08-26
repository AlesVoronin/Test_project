const burger_menu = document.querySelector(".burger-menu");
const burger_button = document.querySelector(".burger-button");

burger_button.addEventListener('mousedown', () => {
    if (burger_menu.classList.contains("no-active")){
        burger_menu.setAttribute("style","top:0");
        burger_menu.classList.remove("no-active")
    }
    else {
        burger_menu.setAttribute("style","top: -100vh");
        burger_menu.classList.add("no-active");
    }
})

