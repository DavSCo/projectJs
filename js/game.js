// On initialise un tableau qui stock les symboles
var symboles = ["pique", "coeur", "carreau", "trefle"];

// On initialise le score du joueur a 20 credits
var credit = 20;

var scores = 0;

// On definit le bouton start
var start = document.querySelector(".start");



var creditHtml = document.querySelector(".credit");

// On definit chaque case de notre roulette
var case1 = document.querySelector(".case1");
var case2 = document.querySelector(".case2");
var case3 = document.querySelector(".case3");
var case4 = document.querySelector(".case4");

case1.innerHTML = "<img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'>";
case2.innerHTML = "<img src='images/coeur.png'>" + "<img src='images/trefle.png'>" + "<img src='images/carreau.png'>";
case3.innerHTML = "<img src='images/trefle.png'>" + "<img src='images/carreau.png'>" + "<img src='images/pique.png'>";
case4.innerHTML = "<img src='images/carreau.png'>"+ "<img src='images/pique.png'>" + "<img src='images/coeur.png'>";

$( document ).ready(function() {
    var audio = $("#clickSound")[0];
    $("#start").mousedown(function() {
        audio.play();
    });
});


// On crée l'action a réalsier au click du bouton
start.addEventListener('click',function () {



    $('.case').css("top", "0");

    // Tant que le joueur possede assez de credit pour jouer il peut lancer la roulette
    if (credit >= 1) {

        //A chaque partie joué le joueur perd 1 credit
        credit -= 1;

        // On definit chaque case de notre roulette
        var case1 = document.querySelector(".case1");
        var case2 = document.querySelector(".case2");
        var case3 = document.querySelector(".case3");
        var case4 = document.querySelector(".case4");

        var historique = $(".historiquetexte ul");

        // On va générer 4 symboles aléatoirement du tableaux des symboles
        var symboles1 = symboles[Math.floor(Math.random() * symboles.length)];
        var symboles2 = symboles[Math.floor(Math.random() * symboles.length)];
        var symboles3 = symboles[Math.floor(Math.random() * symboles.length)];
        var symboles4 = symboles[Math.floor(Math.random() * symboles.length)];


        case1.innerHTML = "<img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/" + symboles1 + ".png'><img src='images/carreau.png'>";
        case2.innerHTML = "<img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/coeur.png'>" + "<img src='images/trefle.png'>" + "<img src='images/carreau.png'><img src='images/" + symboles2 + ".png'><img src='images/carreau.png'>";
        case3.innerHTML = "<img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/trefle.png'>" + "<img src='images/carreau.png'>" + "<img src='images/pique.png'><img src='images/" + symboles3 + ".png'><img src='images/carreau.png'>";
        case4.innerHTML = "<img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/pique.png'>" + "<img src='images/coeur.png'>" + "<img src='images/trefle.png'><img src='images/carreau.png'>"+ "<img src='images/pique.png'>" + "<img src='images/coeur.png'><img src='images/" + symboles4 + ".png'><img src='images/carreau.png'>";



        $('.case').animate({top : -2100}, 500, "swing");

        // Si les 4 symboles sont identiques le joueur gagne 5 credits
        if (symboles1 == symboles2 && symboles2 == symboles3 && symboles3 == symboles4) {

            document.querySelector(".name").style.webkitAnimationName = "clignotename";

            credit += 5;

            scores += 1;
            console.log(" Vous avez gagnez 5 Credit !");
            console.log(scores);
           // historique.innerHTML = "<p> + 5 Credits JACKPOT !";
            historique.append("<li> +5 Credits ! </li>");


        }else {

            document.querySelector(".name").style.webkitAnimationName = "none";

            scores += 0;

            console.log("Vous n'avez rien gagné ! Et vous avez perdu 1 credit");
            console.log(scores);

            //historique.innerHTML = "<p> -1 Credit </p>";
            historique.append("<li> -1 Credit </li>");
        }


        /*// Affiche chaque symboles sur notre page
        case1.innerHTML = "<p>" + symboles1 + "</p>";
        case2.innerHTML = "<p>" + symboles2 + "</p>";
        case3.innerHTML = "<p>" + symboles3 + "</p>";
        case4.innerHTML = "<p>" + symboles4 + "</p>";*/

        creditHtml.innerHTML = "<h4 class='creditnb'>" + credit + "</h4>";

    // Si par contre le joueur ne possede aucun credit il ne peut plus jouer
    }else if (credit == 0) {

        creditHtml.innerHTML = "<h4 class='creditnb'>" + credit + "</h4>";
        window.alert("Vous n'avez plus assez de credit pour jouer !")

    }

    console.log(credit);



});