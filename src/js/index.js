document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    const form = document.getElementById("form-input");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        login();
    }) 
});

function login(){
    const form = document.getElementById("form-input");
    const data = new FormData(form);
    const object = {};
    object['name'] = data.get('name');
    object['email'] = data.get('email');
    console.info(object);
    console.log(object);
}