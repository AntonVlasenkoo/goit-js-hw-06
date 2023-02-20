const inputEl = document.querySelector("#validation-input")


inputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        
        validRef()
        
    }
    else {
        inValidRef()
    };
 
} )


function validRef() {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    
};



function inValidRef() {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
}


