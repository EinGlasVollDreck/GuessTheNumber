var int = start();
console.log(int);
function start(){
    return randomNumb();
}

function randomNumb() {
    return Math.round(Math.random() * (10 - 1)) + 1;
}

function guessbtn(numb) {
    
    if(numb > 10)
    {
        console.log("Die Zahl darf höchstens 10 betragen!");
    }
    else if(numb < 1)
    {
        console.log("Die Zahl muss mindestens 1 betragen!");
    }
    else if(numb == int)
    {
        console.log("That's right! The Number were " + int);
    }
    else if(numb <= int && numb >= 1 && numb != int)
    {
        console.log("your guess is too low");
    }
    else if(numb >= int && numb <= 10 && numb != int)
    {
        console.log("your guess is too high");
    }
}