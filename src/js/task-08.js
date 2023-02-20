

const form = document.querySelector(".login-form")

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
  
    const formElements = event.currentTarget.elements;

    
if (formElements.email.value === "" || formElements.password.value === "") {
    return alert("Bсі поля повинні бути заповнені!!!");
    };

    const formValue = {
        password: formElements.password.value,
        email: formElements.email.value,
    };

    console.log(formValue);
    event.currentTarget.reset();
};
