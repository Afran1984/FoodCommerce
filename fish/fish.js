const searchFood = () => {
    const SearchField = document.getElementById('Search-field');
    const SearchText = SearchField.value;
    SearchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySerchReasult(data.meals))

}
const displaySerchReasult = meals => {
    //console.log(meals);
    const SearchResult = document.getElementById('Search-result');
    SearchResult.textContent = '';
    if (meals.length == 0) {
        console.log("THIS KABAR IS NOTHING")
    }
    meals.forEach(meal => {
        //console.log(meal);
        const Div = document.createElement('div');
        Div.classList.add('col');
        Div.innerHTML = `
        <div onclick = "loadmealDitel(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>`;
        SearchResult.appendChild(Div);
    });
}
const loadmealDitel = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaymealDital(data.meals[0]))
}
const displaymealDital = Meal => {
    //console.log(Meal);

    const mealDetails = document.getElementById('meal-Details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <img src="${Meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${Meal.strMeal}</h5>
                <p class="card-text">${Meal.strInstructions.slice(0, 200)}</p>
                <a href="${Meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
            `;
    mealDetails.appendChild(div);
}