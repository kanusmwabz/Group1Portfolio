document.getElementById("light-mode-toggle-btn").addEventListener('click', darkmodefunc)

function darkmodefunc(){
    document.body.classList.toggle("dark-mode");
}

document.getElementById("hidden-nav-button").addEventListener('click', dropdownfunc)

function dropdownfunc(){
    document.body.classList.toggle("hidden-nav");
}
