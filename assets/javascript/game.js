$(document).ready(function () {

    var wins = 0;
    console.log("wins: " + wins);
    var losses = 0;
    console.log("losses: " + losses);
    var score = 0;
    console.log("score: " + score);

    targetNumber = Math.floor(Math.random() * 101) + 19;
    console.log("compPick: " + targetNumber);
    $(".targetNumber").html(targetNumber);


    /*for (var i = 0; i < crystals.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass(".crystals");
        imageCrystal.attr("src", "assets/images/Gemstone-Clip-Art-1.png");
        imageCrystal.attr("data-crystalvalue", [i]);
        $(".crystals").append(imageCrystal);
    }*/

    var names = document.getElementsByClassName(".crystals");

    names = Math.floor(Math.random() * 11) + 1;

    var crystalOne = $("#img1").html("<img src='assets/images/Gemstone-Clip-Art-1.png'>");

    var crystalTwo = $("#img2").html("<img src='assets/images/Gemstone-Clip-Art-2.png'>");

    var crystalThree = $("#img3").html("<img src='assets/images/Gemstone-Clip-Art-8.png'>");

    var crystalFour = $("#img4").html("<img src='assets/images/Gemstone-Clip-Art-9.png'>");

    /*function reset() {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        console.log("compPick: " + targetNumber);
        $(".targetNumber").html(targetNumber);

        crystalOne = Math.floor(Math.random() * 11) + 1;
        console.log("Crystal 1: " + crystalOne);
        $("#img1").html("src", "assets/images/Gemstone-Clip-Art-1.png" + "value");

        crystalTwo = Math.floor(Math.random() * 11) + 1;
        console.log("Crystal 2: " + crystalTwo);
        $("#img2").html("src", "assets/images/Gemstone-Clip-Art-2.png" + "value");

        crystalThree = Math.floor(Math.random() * 11) + 1;
        console.log("Crystal 3: " + crystalThree);
        $("#img3").html("src", "assets/images/Gemstone-Clip-Art-8.png" + "value");

        crystalFour = Math.floor(Math.random() * 11) + 1;
        console.log("Crystal 4: " + crystalFour);
        $("#img4").html("src", "assets/images/Gemstone-Clip-Art-9.png" + "value");
    }*/

    $("#img1").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);

        if (newScore === targetNumber) {
            wins++;
            $(".wins").html("Wins: " + wins);
            alert("You win!");
            console.log("wins: " + wins);
        }

        else if (newScore > targetNumber) {
            losses++;
            $(".losses").html("Losses: " + losses);
            console.log("losses: " + losses);
            alert("You lose!");
        }
    });
});
