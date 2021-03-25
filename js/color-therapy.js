'use strict'



///////////////////// blue slider to compare two images //////////////////////////////////
function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchend", slideFinish);
        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }
        function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }
        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }
        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}
/*Execute a function that will execute an image compare function for each element with the img-comp-overlay class:*/
initComparisons();


let form = document.getElementById('formy');
let getTherapyResult = document.getElementById('therapyResult');
let firstValueAnswer;
    let secondValueAnswer;
    let thirdValueAnswer;
function render() {
    let answerP;
    
    console.log(getTherapyResult.childNodes)
    answerP = document.createElement('p');
    getTherapyResult.appendChild(answerP);
    answerP.textContent = `Most adults need 7 to 8 hours of good quality sleep on a regular schedule each night. Getting enough sleep isn’t only about total hours of sleep. It’s also important to get good quality sleep on a regular schedule so you feel rested when you wake up.
    And for that we recommend you to ${firstValueAnswer}try to surround yourself with colors like Blue, yellow, green, silver, orange, and pink. These colors reduce stress and soothe the nervous system. Try to stick with neutral or pastel shades for a soft, welcoming atmosphere. And from Stoneood family we wishing you sweet dreams.
    
    And we can tell that many people find themselves stuck in a daily or weekly routine that offers little more than a “rinse and repeat” type life.  So sometimes it is important to bring some change to what might seem like a boring life. one way to end the monotony is to focus on a hobby that is both enjoyable and helps you pass the time in a meaningful way. 

    Spending time doing an enjoyable activity that is not attached to work or other commitments will help increase your happiness and satisfaction with life. It will allow you to spend time doing something that is only for your own personal benefit, and not the benefit of others.
    
    And for that we recommend you to ${secondValueAnswer}we recommend you to unleash your creativity by adding some orange to your day so it will inspire your creativity and enthusiasm. As well as some yellow to inspire creativity, imagination, and inspiration. 
    
    Let it rain on some days, let yourself shiver on some cold nights, so when it's Spring you'll know why it was all worth going through. ― Sanhita Baruah
    Life is like ocean it goes up and down, and it is okay to feel so from time to time and since ${thirdValueAnswer}toward your DREMS and GOALS.
    If you choosing green, then you will find quiet, restful, and soothing color that can invite harmony and diffuse anxiety.
    Along with some blue that is a highly peaceful color, and it can be especially helpful for stress management because it can encourage a powerful sense of calm.
    
    “” Colors play a vital role in our lives and how we respond to our surroundings. The colors you surround yourself with can influence your perspective and emotions, as well as those around you””
    
    `
}

form.addEventListener('submit', clickhandler)

function clickhandler(event) {
    event.preventDefault();

    
    let firstPercantage;
    let secondPercantage;
    let thirdPercantage;
    let fouthPercantage;
    let fifthPercantage;
    let sixthPercantage;


    let firstColor;
    let secColor;
    let thirdColor;
    let firstColor2;
    let secColor2;
    let thirdColor2;


    let question1 = event.target.question1.value;
    let question2 = event.target.question2.value;
    let question3 = event.target.question3.value;

    if (question1 == 'ans1Q1') {
        firstValueAnswer = `make changes to your routine if you can't find enough time to sleep. And to help you with this part `;
        firstPercantage = 50;
        firstColor = 'White';
        fouthPercantage = 20;
        firstColor2 = 'Black'


    }
    else
        if (question1 == 'ans2Q1') {
            firstValueAnswer = `keep going on with your routine of sleeping around 7 hours, and to help you even more with that `;
            firstPercantage = 30;
            firstColor = 'Black'
            fouthPercantage = 20;
            firstColor2 = 'White'

        }
    if (question2 == 'ans1Q2') {
        secondValueAnswer = `keep going on with your hobbies, because hobbies are a great stress reliever, so `;
        secondPercantage = 60;
        secColor = 'Blue'
        fifthPercantage = 20;
        secColor2 = 'Green';
    }
    else
        if (question2 == 'ans2Q2') {
            secondValueAnswer = `make some changes to your routine by adding a hobby. And your hobby should be a completely pleasurable activity that allows you to take your mind off of the demands of your daily life or negative emotions. It’s a healthy and productive distraction from work or personal troubles. and to help you with this part `;
            secondPercantage = 40;
            secColor = 'Green';
            fifthPercantage = 80;
            secColor2 = 'blue';
        }


    if (question3 == 'ans1Q3') {
        thirdValueAnswer = `You are going through some of these days now we will highly recommend some colors to boost yourself up and feel much better to keep going `;
        thirdPercantage = 20;
        thirdColor = 'yellow';
        sixthPercantage = 20;
        thirdColor2 = 'Orange';
    }
    else
        if (question3 == 'ans2Q3') {
            thirdValueAnswer = `2.	You are feeling better now we encourage you to keep it up. And from our side will highly recommend some colors to boost yourself up even more`;
            thirdPercantage = 50;
            thirdColor = 'Orange';
            sixthPercantage = 20;
            thirdColor2 = 'yellow';
        }

    console.log(firstValueAnswer, secondValueAnswer, thirdValueAnswer)



    let labels = [

        firstColor,
        secColor,
        thirdColor,
        firstColor2,
        secColor2,
        thirdColor2,
    ];
    let data = [
        firstPercantage,
        secondPercantage,
        fouthPercantage,
        fifthPercantage,
        thirdPercantage,
        sixthPercantage,
    ];

    let backGroundArray = [firstColor, secColor, thirdColor, firstColor2, secColor2, thirdColor2];
    let barChart = document.getElementById("pieChart").getContext('2d');
    Chart.defaults.global.defaultFontFamily = 'lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';



    let myChart = new Chart(barChart, {

        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,


                    backgroundColor: backGroundArray,

                }
            ],




        },
        options: {
            title: {
                display: true,
                text: "Colors therapy election",
                fontSize: 30,
            }
        }
    });
    // if(getTherapyResult.childNodes[1]){

    //     getTherapyResult.removeChild(getTherapyResult.childNodes[1]);
    // }
    render();
}