let myName = prompt ("Enter your name")
let myPatner = prompt ("Enter your partner's name");
let loveScore = Math.random() * 100; 
loveScore = Math.floor(loveScore) + 1;

if (loveScore >= 70) {
    alert("Your love percentage is: " + loveScore + "%. " + "You love yourselves like crazy" )
} else {
    alert("Your love percentage is: " + loveScore + " %")
}