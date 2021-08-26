const open_button = document.querySelector(".pokemon-form-button")
const form = document.querySelector(".modal-form");
const wrapper = document.querySelector(".basic-wrapper");
const submit_button = document.querySelector(".submit-button")
const submit_text = document.querySelector(".form-control");

wrapper.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("pokemon-form-button") ||
        event.target.classList.contains("pokemon-form-button__span") ||
    event.target.classList.contains("submit-button")) {
        form.classList.remove("hidden");
        wrapper.setAttribute("style", "filter: blur(6px) grayscale(100%)")
    } else {
        form.classList.add("hidden");
        wrapper.setAttribute("style", "filter: none");
    }
});

function submit(){
    form.classList.add("hidden");
    wrapper.setAttribute("style", "filter: none");
    document.getElementById("submit-button").value = "";
}


