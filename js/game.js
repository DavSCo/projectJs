// On initialise un tableau qui stock les symboles
var symboles = ["♠", "♥", "♦", "♣"];

// On initialise le score du joueur a 20 credits
var credit = 20;

// On definit le bouton start
var start = document.querySelector(".start");

var creditHtml = document.querySelector(".credit");





// On crée l'action a réalsier au click du bouton
start.addEventListener('click',function () {

    // Tant que le joueur possede assez de credit pour jouer il peut lancer la roulette
    if (credit >= 1) {

        //A chaque partie joué le joueur perd 1 credit
        credit -= 1;

        // On definit chaque case de notre roulette
        var case1 = document.querySelector(".case1");
        var case2 = document.querySelector(".case2");
        var case3 = document.querySelector(".case3");
        var case4 = document.querySelector(".case4");



        // On va générer 4 symboles aléatoirement du tableaux des symboles
        var symboles1 = symboles[Math.floor(Math.random() * symboles.length)];
        var symboles2 = symboles[Math.floor(Math.random() * symboles.length)];
        var symboles3 = symboles[Math.floor(Math.random() * symboles.length)];
        var symboles4 = symboles[Math.floor(Math.random() * symboles.length)];



        // Si les 4 symboles sont identiques le joueur gagne 5 credits
        if (symboles1 == symboles2 && symboles2 == symboles3 && symboles3 == symboles4) {

            credit += 5;

        }

        // Affiche chaque symboles sur notre page
        case1.innerHTML = "<p>" + symboles1 + "</p>";
        case2.innerHTML = "<p>" + symboles2 + "</p>";
        case3.innerHTML = "<p>" + symboles3 + "</p>";
        case4.innerHTML = "<p>" + symboles4 + "</p>";

        creditHtml.innerHTML = "<p>" + "Credit : " + credit + "</p>";

    // Si par contre le joueur ne possede aucun credit il ne peut plus jouer
    }else if (credit == 0) {

        creditHtml.innerHTML = "<p>" + "Vous n'avez plus de credit " + "</br>" +"Credit : " + credit + "</p>";

    }

    console.log(credit);



});