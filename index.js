function myFunction(x){
    x.classList.toggle("change");
    let navEl = document.querySelector('nav');
    if(navEl.style.display === "flex"){
        navEl.style.display = "none";
    }
    else {
        navEl.style.display = "flex";
    }
}