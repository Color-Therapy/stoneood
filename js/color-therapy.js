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

form.addEventListener('submit', clickhandler)

function clickhandler(event) {
    event.preventDefault();

    let firstValueAnswer;
    let secondValueAnswer;
    let thirdValueAnswer;
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
        firstValueAnswer = 'first answer 1';
        firstPercantage = 50;
        firstColor = 'White';
        fouthPercantage = 20;
        firstColor2 = 'Black'


    }
    else
        if (question1 == 'ans2Q1') {
            firstValueAnswer = 'sec answer 1';
            firstPercantage = 30;
            firstColor = 'Black'
            fouthPercantage = 20;
            firstColor2 = 'White'

        }
    if (question2 == 'ans1Q2') {
        secondValueAnswer = ' first answer 2 ';
        secondPercantage = 60;
        secColor = 'Blue'
        fifthPercantage = 20;
        secColor2 = 'Green';
    }
    else
        if (question2 == 'ans2Q2') {
            secondValueAnswer = ' sec answer 2';
            secondPercantage = 40;
            secColor = 'Green';
            fifthPercantage = 20;
            secColor2 = 'blue';
        }


    if (question3 == 'ans1Q3') {
        thirdValueAnswer = ' first answer 3 ';
        thirdPercantage = 80;
        thirdColor = 'yellow';
        sixthPercantage = 20;
        thirdColor2 = 'Orange';
    }
    else
        if (question3 == 'ans2Q3') {
            thirdValueAnswer= 'sec answer 3 ';
            thirdPercantage = 50;
            thirdColor = 'Orange';
            sixthPercantage = 20;
            thirdColor2 = 'yellow';
        }

    console.log(firstValueAnswer,secondValueAnswer,thirdValueAnswer)



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










}