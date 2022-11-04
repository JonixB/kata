const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let bakerAIngred = '';

  //find the first ingredient from bakery a
  for (let x = 0; x < bakeryA.length; x++) {
    for(const recipe of recipes){
      for (let y = 0; y < recipe.ingredients.length; y++) {
        if (bakeryA[x] === recipe.ingredients[y]) {
          bakerAIngred = bakeryA[x];
          
          //once found, grab the second ingredient from the recipe and search for it in bakery b
          for (let z = 0; z < bakeryB.length; z++) {
            if (y === 0) {
              if (bakeryB[z] === recipe.ingredients[1]) {
                return recipe.name;
              }
            } else {
              if (bakeryB[z] === recipe.ingredients[0]) {
                return recipe.name;
              }
            }
          }
        }
      }
    }
  } 
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));