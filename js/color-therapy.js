'use strict'

let form = document.getElementById('formy');

form.addEventListener('submit', clickhandler)

function clickhandler(event) {
    event.preventDefault();

    let x;
    let y;
    let z;

    let question1 = event.target.question1.value;
    let question2 = event.target.question2.value;
    let question3 = event.target.question3.value;





    if (question1 == 'ans1Q1') {
        x = 'first answer 1';
    }
    else
        if (question1 == 'ans2Q1') {
            x = 'sec answer 1';
        }
    if (question2 == 'ans1Q2') {
        y = ' first answer 2 ';
    }
    else
        if (question2 == 'ans2Q2') {
            y = ' sec answer 2';
        }


    if (question3 == 'ans1Q3') {
        z = ' first answer 3 ';
    }
    else
        if (question3 == 'ans2Q3') {
            z = 'sec answer 3 ';
        }

    console.log(x, y, z)


}
