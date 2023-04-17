
let animationPlace = document.getElementById("place");
let animationGame = document.getElementById("game");
let animationCocktail = document.getElementById("cocktail");

animationPlace.addEventListener("ready", () => {
    animationPlace.seek("50%");
});
animationPlace.addEventListener("mouseover", () => {
    animationPlace.play();
});


animationGame.addEventListener("ready", () => {
    animationGame.seek("80%");
});
animationGame.addEventListener("mouseover", () => {
    animationGame.play();
});


animationCocktail.addEventListener("ready", () => {
    animationCocktail.seek("65%");
});
animationCocktail.addEventListener("mouseover", () => {
    animationCocktail.play();
});

