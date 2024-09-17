'use strict'

function roll() {
    let dice = Math.floor(Math.random() * 6) + 1
    return dice
}

function changeResult() {
    const dcontainer = document.getElementById("dice")
    let dice = roll()
    dcontainer.querySelector("img").src = `./images/dice-six-faces-${dice}.svg`
}

document.getElementById("dice").addEventListener("click", changeResult)

$(document).ready(function(){
    $("#dice").click(function(){
        $("#dice").addClass("animated");
    });


    $('#dice').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
         $(this).removeClass("animated");
    });
});
//https://stackoverflow.com/questions/51010637/how-can-i-play-a-keyframe-animation-on-click