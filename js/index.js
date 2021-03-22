'use strict'
let form = document.getElementById('myform');

form.addEventListener('submit',clickhandler)

    function clickhandler(event) {
    event.preventDefault();

let text =event.target.textForm.value;
let fisrtName=event.target.firsName.value;

let gender=event.target.gender.value;
let age = event.target.age.value;  

console.log(text,fisrtName,gender,age );

}
