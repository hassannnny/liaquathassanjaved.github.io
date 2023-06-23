myID = document.getElementById("customID"); 

var myScrollFunc = function() {
    var x = window.scrollY;
    
    if (x >= 1100) {
        myID.className = "cta show" 


    let myTimeout = setTimeout(

        function profBio() {

            const letsSee = document.getElementById("text").innerHTML = 

                "About me" + "<br><br>" +
                "<p class = 'text2'>" + 
                "Hassan is an enthusiastic full stack software engineer." + "<br>" + 
                "Predominantly a practitioner of Java, Hassan is proficient in plenty of " + "<br>" + 
                "languages such as HTML&CSS, Javascript, Python, and even cloud computing in AWS." + "<br>" + 
                "In 2022, Hassan worked for Genspark serving as a Java Full Stack Software Engineer where he" + "<br>" +
                "built several individual projects and back end applications." + "<br>" + 
                "Outside of work, you can find Hassan strength training at a gym or at a park playing basketball" + "<br>" + 
                "with friends or at a beach reading and writing poetry." + "<br>" +
                "Hassan earned a B.S in Computer Science with a concentration in Information Technology from" + "<br>" +
                "Northeastern Illinois University in 2021." +
                "</p>";

        }, 2000);

    }
    else {
        myID.className = "cta hide"
    }
};

window.addEventListener("scroll", myScrollFunc);


            

console.log("Yerr");