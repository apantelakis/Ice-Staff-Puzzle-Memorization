function getRandomInt(min, max) {
    return (Math.random() * (max - min) + min);
}
var rng = Math.round(getRandomInt(1, 12));

var imgpath = "img/" + rng + ".png";

var truepath = "img/" + rng + "s.png";

var response = "";


document.getElementById("randomimg").src = imgpath;


const images = document.querySelectorAll(".solutionclass");


images.forEach(image => {
    image.addEventListener("click", (event) => {

        

        const imageSrc = event.target.getAttribute("src");
        
        if(imageSrc == truepath) {
            console.log("correct")
            response = "Correct!"
            document.getElementById("response").textContent = response;
        } else {
            console.log("Wrong")
            response = "Wrong"
            document.getElementById("response").textContent = response;
        }


        rng = Math.round(getRandomInt(1, 12));

        imgpath = "img/" + rng + ".png"

        document.getElementById("randomimg").src = imgpath;
        
        truepath = "img/" + rng + "s.png"



    });

});