const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfRecipes = document.querySelector('#ingredients')

const creatingARecipe = ingredients.map(option => {
  const liEl = document.createElement('li');
  liEl.textContent = option;
  liEl.classList.add('item');
  return liEl;
});


console.log(creatingARecipe)

listOfRecipes.append(...creatingARecipe)

console.log(ingredients)









