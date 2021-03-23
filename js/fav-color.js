'use strict'



// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}




let formA = document.getElementById('theForm')

formA.addEventListener('submit', clickhandler1)
function clickhandler1(event) {
    event.preventDefault();


  let favcolor= event.target.favquestion.value;

    if (favcolor == 'White') {
        console.log('ans white');
    }
    else
        if (favcolor == 'Black') {
            console.log('ans black');

        }
        else
            if (favcolor == 'Gray') {
                console.log('ans gray');
            }
            else
                if (favcolor == 'Brown') {
                    console.log('ans brown')
                }
                else
                    if (favcolor == 'Violet') {
                        console.log('ans violet')
                    }
                    else
                        if (favcolor == 'Green') {
                            console.log('Ans green')
                        }
                        else
                            if (favcolor == 'Blue') {
                                console.log('ans blue')
                            }


                            else
                                if (favcolor == 'Pink') {
                                    console.log('ans pink')
                                }
                                else
                                    if (favcolor == 'Yellow') {
                                        console.log('ans yello')
                                    }
                                    else
                                        if (favcolor == 'Orange') {
                                            console.log('ans orange')
                                        }
                                        else
                                            if (favcolor == 'Red') {
                                                console.log('ans red')
                                            }







}

