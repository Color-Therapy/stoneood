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
let getFavColorResult = document.getElementById('favColorResult');
let answer=[];
function render() {
    let answerP = document.createElement('p');
    answerP.textContent = answer[0];
}


formA.addEventListener('submit', clickhandler1)
function clickhandler1(event) {
    event.preventDefault();

    let favcolor = event.target.favquestion.value;
    if (favcolor == 'White') {
        alert('Here you can find purity or innocence. And the meaning of white pervades our lives. It is the unblemished marker of purity. White is the clean cotton of freshly laundered sheets and spring cleaning. White is the symbol of truth, unadulterated by dishonesty. White can be blinding to those accustomed to the dark, and it can illuminate the literal and figurative ills of society. White is the ideal foil – the contrast against which all other colors look more vibrant. White is clean, simple, and pure. It stands in stark opposition to black, and its meanings are unequivocal. As white light contains all the colors of the spectrum, it’s an inclusive, impartial color, favoring no single hue and refusing to take sides.')
        console.log('ans white');
    } else
        if (favcolor == 'Black') {
            alert('Here you can find mystery. Black is actually the lack of color. It covers, hides and implies that there is a barrier. A strong and powerful color, black is formal and sophisticated, sexy and secretive. It is the color of things that are scary and evil. Black conveys pessimism and a lack of hope. While black has many negative associations, it is a color that signifies power and control. It is considered unfriendly and intimidating, yet still refined, elegant and confident. Black is helpful to other colours, being a strong contrast and making them stand out more.')
            console.log('ans black');
        } else
            if (favcolor == 'Gray') {
                console.log('ans gray');
            } else
                if (favcolor == 'Brown') {
                    console.log('ans brown')
                } else
                    if (favcolor == 'Violet') {
                        console.log('ans violet')
                    } else
                        if (favcolor == 'Green') {
                            console.log('Ans green')
                        } else
                            if (favcolor == 'Blue') {
                                console.log('ans blue')
                            } else
                                if (favcolor == 'Pink') {
                                    console.log('ans pink')
                                } else
                                    if (favcolor == 'Yellow') {
                                        console.log('ans yello')
                                    } else
                                        if (favcolor == 'Orange') {
                                            console.log('ans orange')
                                        } else
                                            if (favcolor == 'Red') {
                                                console.log('ans red')
                                            }

    function updateLocalStorge() {
        let stringedArray = JSON.stringify(favcolor);
        localStorage.setItem('user fav. color', stringedArray);
        console.log(stringedArray)
    }
    updateLocalStorge();
render();
}


