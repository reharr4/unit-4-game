// variables
var wins= 0;
var losses = 0;
var playerScore = 0;
var winningScore;

// random number to reach for a win
function winningScore() {
    winningScore = Math.floor(Math.random() * 101) + 19;
    $("#points").text(winningScore);
    console.log(winningScore);
}

// random values for crystals
function crystalValue() {
    oneValue = Math.floor(Math.random() * 11) + 1;
    twoValue = Math.floor(Math.random() * 11) + 1;
    threeValue = Math.floor(Math.random() * 11) + 1;
    fourValue = Math.floor(Math.random() * 11) + 1;
}

// on.click function for crystals
$("#orange").on("click", function () {
    playerScore += oneValue;
    winsLosses();
    $("#yourScore").text(playerScore);
});

$("#blue").on("click", function () {
    playerScore += oneValue;
    winsLosses();
    $("#yourScore").text(playerScore);
});

$("#yellow").on("click", function () {
    playerScore += oneValue;
    winsLosses();
    $("#yourScore").text(playerScore);
});

$("#pink").on("click", function () {
    playerScore += oneValue;
    winsLosses();
    $("#yourScore").text(playerScore);
});

// wins and losses
function winsLosses() {
    if (playerScore === winningScore) {
        wins++;
        $("#win").text(wins);
        reset();
    }
    else if (playerScore > winningScore) {
        losses++;
        $("#loss").text(losses);
        reset();
    }
}

// reset function
function reset() {
    playerScore = 0;
    $("#yourScore").text(playerScore);

    winningScore();
    crystalValue();

    $("#win").text(wins);
    $("#loss").text(losses);
}

reset();