Professional Bio 




Hassan is an enthusiastic full stack software engineer. 
Predominantly a practitioner of Java, Hassan is profient in plenty of languages such as 
HTML&CSS, Javascript, Python, and even cloud computing in AWS.
In 2022, Hassan worked for Genspark serving as a Java Full Stack Software Engineer where he 
built several individual projects and back end applications.
Outside of work, you can find Hassan strength training at a gym or at a park playing basketball with friends or at a beach reading and writing poetry. 
Hassan earned a B.S in Computer Science with a concentration in Information Technology from Northeastern Illinois University in 2021. 







CSS///////////////////////////////////

h1 {
    color: white;
    text-align: center;
}

span {
    opacity: 0; 
    transition: all 1s ease;
    transform= translateY(0px);
    display: inline block;
}

span.fade {
    opacity: 1;
}

HTML//////////////////////////////////

<h1 class = "fancy">Fancy shnchemancy</h1>


JS /////////////////////////////////////


GRAB TEXT FROM HTML AND TURN TO STRING 

const text = document.querySelector(".fancy");
const strText = text.textContent; 
const splitText = strText.split(""); 

COOK EACH LETTER TO A SPAN 

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>"; 
}

let char = 0; 
let timer = setInterval(onTick, 50); 


function onTick() {
    const span = text.querySelectorAll('span')[char]; 
    span.classList.add('fade'); 
    char++;
    if(char == splitText.length) {
        complete();
        return; 
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}