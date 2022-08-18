// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$('.Button').click(function (e) {
    $('.Button').not(this).removeClass('active');
    $(this).toggleClass('active');
    e.preventDefault();
});

var btnWin = false; var btnLoss = false; var btnDraw = false;
var wins = 0; var losses = 0; var draws = 0; var winstreak = 0; var losestreak = 0; var totalgames = 0; var winrate = 0;
var oldrp = 0; var newrp = 0; var rpnet = 0;

function winClick() {
    btnLoss = false; btnDraw = false;
    if (btnWin == false) {btnWin = true;}
    else {btnWin = false;}
}

function lossClick() {
    btnWin = false; btnDraw = false;
    if (btnLoss == false) {btnLoss = true;}
    else {btnLoss = false;}
}

function drawClick() {
    btnWin = false; btnLoss = false;
    if (btnDraw == false) {btnDraw = true;}
    else {btnDraw = false;}
}

function submitClick() {
    if (btnWin == true) {
        wins++; winstreak++; losestreak = 0;
        document.getElementById("txtStreak").textContent = "Win streak: " + winstreak;
    }
    else if (btnLoss == true) {
        losses++; losestreak++; winstreak = 0;
        document.getElementById("txtStreak").textContent = "Lose streak: " + losestreak;
    }
    else if (btnDraw == true) {
        draws++; losestreak = 0; winstreak = 0;
        document.getElementById("txtStreak").textContent = "Win streak: 0";
    }
    totalgames++; winrate = wins / totalgames;
    document.getElementById("txtWinrate").textContent = "Winrate: " + Math.round(100 * winrate) + "%";
    document.getElementById("rpinput").style.display = "none";
    btnWin = false; btnLoss = false; btnDraw = false;
    $('.Button').removeClass('active');
}

function calculateRPNet() {
    if (isNaN(parseInt(document.getElementById("userinput").value))) {
        document.getElementById("txtError").textContent = "Please enter only positive integers";
    }
    else {
        if (oldrp == 0) {
            oldrp = parseInt(document.getElementById("userinput").value);
            newrp = oldrp;
        }
        else {
            newrp = parseInt(document.getElementById("userinput").value);
            rpnet = newrp - oldrp;
        }
        document.getElementById("txtNetRating").textContent = "RP Net Change: " + rpnet;
        document.getElementById("txtError").textContent = "";
    }
    document.getElementById('userinput').value = '';
}

function toggleSubmit() {
    var submit = document.getElementById("rpinput");
    if (btnWin == false && btnLoss == false && btnDraw == false) {
        submit.style.display = "none";
    } else if (btnWin == true || btnLoss == true || btnDraw == true){
        submit.style.display = "block";
    }
}
