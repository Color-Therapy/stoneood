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
let answer;
function render() {
    let answerP;
    console.log(getFavColorResult.childNodes)
    answerP = document.createElement('p');
    getFavColorResult.appendChild(answerP);
    answerP.textContent = answer;

}


formA.addEventListener('submit', clickhandler1)
function clickhandler1(event) {
    event.preventDefault();
    
    let favcolor = event.target.favquestion.value;
    if (favcolor == 'White') {
        answer=('Here you can find purity or innocence. And the meaning of white pervades our lives. It is the unblemished marker of purity. White is the clean cotton of freshly laundered sheets and spring cleaning. White is the symbol of truth, unadulterated by dishonesty. White can be blinding to those accustomed to the dark, and it can illuminate the literal and figurative ills of society. White is the ideal foil – the contrast against which all other colors look more vibrant. White is clean, simple, and pure. It stands in stark opposition to black, and its meanings are unequivocal. As white light contains all the colors of the spectrum, it’s an inclusive, impartial color, favoring no single hue and refusing to take sides.')
        console.log('ans white');
    } else
        if (favcolor == 'Black') {
            answer=('Here you can find mystery. Black is actually the lack of color. It covers, hides and implies that there is a barrier. A strong and powerful color, black is formal and sophisticated, sexy and secretive. It is the color of things that are scary and evil. Black conveys pessimism and a lack of hope. While black has many negative associations, it is a color that signifies power and control. It is considered unfriendly and intimidating, yet still refined, elegant and confident. Black is helpful to other colours, being a strong contrast and making them stand out more.');
            console.log('ans black');
        } else
            if (favcolor == 'Gray') {
                answer=('Here you can find compromise. Grey is considered to be an unemotional, detached color seeking to avoid attention. It conveys gloom and depression. Very conservative, grey has a stabilizing effect as it is very neutral, but can also conjure up feelings of frustration. Grey is linked with maturity and protection, being reliable and practical. Grey would not be considered a glamorous color, yet is still elegant.');
                console.log('ans gray');
            } else
                if (favcolor == 'Brown') {
                    answer=('Here you can find the earth. Stability and a solid foundation is the message that emanates from the color brown. This color relates to things that are natural and simple. Brown is thought to be dull, but is reliable and wholesome. Although frugal and stingy, brown is a color of safety and quiet confidence; warm and reassuring. Sadly, brown is among the least favorite colors, but conveys honesty and sincerity. On its own, brown seems unsophisticated, but when combined with others can become quite elegant.');
                    console.log('ans brown')
                } else
                    if (favcolor == 'Violet') {
                        answer=('Here you can find spirituality. The energy of red with the calm of blue combine to create violet, a color that inspires reflection and self-awareness. It is the color of the sensitive, compassionate intuitive soul – the introvert. Also, violet has long been associated with royalty, and characteristics of quality and luxury. Overuse of violet can invoke irritability and arrogance.');
                        console.log('ans violet')
                    } else
                        if (favcolor == 'Green') {
                            answer=('Here you can find growth and health. Think of nature and see green in all its glory expressing renewal and life. Green has a strong association as a refreshing and peaceful color. It evokes feeling of abundance and a plentiful environment while providing a restful and secure feeling. The prosperity signified by green can be negatively perceived as materialistic and possessive.');
                            console.log('Ans green')
                        } else
                            if (favcolor == 'Blue') {
                                answer=('Here you can find trust. Blue, the shade of the sea and the sky, is thought to induce calm and convey tranquility, serenity and peace. The popular color instils confidence and inspires feelings of trust, loyalty, integrity and responsibility. Cool blue is conservative and can also be perceived as aloof. Blue tends to suppress the appetite – there are not many foods associated with blue in nature.');
                                console.log('ans blue')
                            } else
                                if (favcolor == 'Pink') {
                                    answer=('Here you can find sensitivity – The passion of red combined with the purity of white create this color associated with love, tranquility and femininity. Pink has associations with tenderness and nurturing while conveying a sense of safety and even vulnerability. Seeing the world through “rose (pink) colored glasses” is holds a negative connotation as being associated with being unrealistic and overly optimistic.');
                                    console.log('ans pink')
                                } else
                                    if (favcolor == 'Yellow') {
                                        answer=('Here you can find optimism. Yellow is a compelling color that conveys youthful, fresh energy. This color of sunshine is uplifting and illuminating and associated with success and confidence. Yellow stimulates the left side of the brain, helping with clear thinking and quick decision making. Yellow grabs attention because the eye sees yellow first. The downside of yellow is that it can induce anxiety and cause one to be over-critical. It also signifies cowardice.');
                                        console.log('ans yello')
                                    } else
                                        if (favcolor == 'Orange') {
                                            answer=('Here you can find encouragement and adventurous. The combination of yellow and red makes orange conveys excitement, warmth and enthusiasm. Social and inviting, this is the color of the extrovert, exuding happiness and joy, releasing inhibitions. Need to be inspired into action or have a positive outlook on life? Orange is a motivating and encouraging color. Orange is appealing to young people. It stimulates the appetite and is associated with healthy good. However, the negative connotations of orange include insincerity, exhibitionism and self-indulgence.');
                                            console.log('ans orange')
                                        } else
                                            if (favcolor == 'Red') {
                                                answer=('Here you can find passion and drama, by red we attract most attention and is associated with strong emotions such as love and anger. Red is the color used universally to signify danger, courage, strength, and power. Red is stimulating, vibrant and exciting. Red inspires desire with a strong link to sexuality and increased appetites. In Chinese culture red represents luck and prosperity. Use red when you want to get pulses racing and to inspire action However, use carefully as red can evoke feelings of aggression and cause visual strain. Lovers of red are passionate with an enthusiasm for life.');
                                                console.log('ans red')
                                            }

    function updateLocalStorge() {
        let stringedArray = JSON.stringify(favcolor);
        localStorage.setItem('user fav. color', stringedArray);
        console.log(stringedArray)
    }
    updateLocalStorge();
    let Ans=localStorage.getItem('user fav. color')
    if(getFavColorResult.childNodes[1]){

        getFavColorResult.removeChild(getFavColorResult.childNodes[1]);
    }
render();


}


