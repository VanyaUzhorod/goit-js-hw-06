const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsItems = document.createElement('li');

const markup = ingredients.map(ingredient => {
 const ingredientsItems = document.createElement('li');
 ingredientsItems.classList.add('item');
  ingredientsItems.textContent =`${ingredient}`;
  return ingredientsItems});

ingredientsList.append(...markup);
console.log(ingredientsList);