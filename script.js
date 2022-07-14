const = form = document.querySelector("form"),
nextbtn = document.querySelector(".nextbtn"),
allInput = document.querySelectorAll(".first");




nextbtn.addEventListener("click", ()=> {allInput.forEach(input => {
    if(input.value != ""){
        form.classList.add('secActive');

    }else{
        form.classList.remove('secActive');
        alert("input is empty")
    }
}
)
})