var int = start();
console.log(int);
function start(){
    return randomNumb();
}

function randomNumb() {
    return Math.round(Math.random() * (10 - 1)) + 1;
}

function guessbtn(numb) {
    var tx = "";
    var color = "red";
    
    if(numb > 10)
    {
        tx = "Die Zahl darf höchstens 10 betragen!";
    }
    else if(numb < 1)
    {
        tx = "Die Zahl muss mindestens 1 betragen!";
    }
    else if(numb == int)
    {
        tx = "That's right!<br> The Number were " + int;
        color = "green";
    }
    else if(numb <= int && numb >= 1 && numb != int)
    {
        tx = "your guess is too low";
    }
    else if(numb >= int && numb <= 10 && numb != int)
    {
        tx = "your guess is too high";
    }


    document.getElementById('para').innerHTML = tx;
    document.getElementById('para').style.color = color;
}