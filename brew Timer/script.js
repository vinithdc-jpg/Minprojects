let timer;
let totalSeconds = 180;
let currentSeconds = totalSeconds;

const timerDisplay = document.getElementById("timer");

document.getElementById("brewSelect").addEventListener("change", function () {

    totalSeconds = parseInt(this.value);

    currentSeconds = totalSeconds;

    updateDisplay();

});

function updateDisplay() {

    let min = Math.floor(currentSeconds / 60);

    let sec = currentSeconds % 60;

    timerDisplay.innerText =
        String(min).padStart(2, "0") + ":" +
        String(sec).padStart(2, "0");

}

updateDisplay();

function startTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

        if (currentSeconds > 0) {

            currentSeconds--;

            updateDisplay();

        } else {

            clearInterval(timer);

            alert("☕ Coffee is Ready!");

        }

    }, 1000);

}

function pauseTimer() {

    clearInterval(timer);

}

function resetTimer() {

    clearInterval(timer);

    currentSeconds = totalSeconds;

    updateDisplay();

}

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

function saveRecipe() {

    const recipe = {

        name: name.value,

        coffee: coffee.value,

        water: water.value,

        steps: steps.value,

        favorite: false

    };

    recipes.push(recipe);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    renderRecipes();

    name.value = "";
    coffee.value = "";
    water.value = "";
    steps.value = "";

}

function renderRecipes() {

    const container = document.getElementById("recipes");

    container.innerHTML = "";

    recipes.forEach((r, index) => {

        container.innerHTML += `

<div class="recipe">

<h3>

${r.name}

<span class="favorite"

onclick="toggleFavorite(${index})">

${r.favorite ? "❤️" : "🤍"}

</span>

</h3>

<p><b>Coffee:</b> ${r.coffee} g</p>

<p><b>Water:</b> ${r.water} ml</p>

<p>${r.steps}</p>

<div class="actions">

<button onclick="deleteRecipe(${index})">

Delete

</button>

</div>

</div>

`;

    });

}

function deleteRecipe(index) {

    recipes.splice(index, 1);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    renderRecipes();

}

function toggleFavorite(index) {

    recipes[index].favorite = !recipes[index].favorite;

    localStorage.setItem("recipes", JSON.stringify(recipes));

    renderRecipes();

}

renderRecipes();