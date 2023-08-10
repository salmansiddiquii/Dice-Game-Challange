
var randomNumber1 =  Math.floor(Math.random() * 6) + 1;
var randomNumber2 =  Math.floor(Math.random() * 6) + 1;




var image1 = "images/dice"+randomNumber1+".png";
var image2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src" ,  image1);
document.querySelector(".img2").setAttribute("src" , image2);

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    heading.textContent  = "Player 1 Won!"
}

else if (randomNumber2 > randomNumber1){
    heading.textContent  = "Player 2 Won!"
}

else {
    heading.textContent = "Match Draw!"
}

























































