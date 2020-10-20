'use strict';

var allUsers = [];

var allWines = [];
var allMealPlans = [];
var userName;

var wineSelection = document.getElementById('redWineList');
// console.log(wineSelection);
// get user name input
function checkNewUser() {
  
  var userNameFromLocalStorage = localStorage.getItem(userName);

  if (userNameFromLocalStorage) {
    var parsedUserName = JSON.parse(userNameFromLocalStorage);
  

  } else {
    JSON.stringify(userName);
    //missing some info to complete this function
    localStorage.setItem(userName);
    //instantiate our wine categories
    instantiateWineObjects();
  }
}
// idOfForm.addEventListener('submit', getUserName);
instantiateWineObjects();

// check local storage for that input
// if user name is in local storage, pull existing info
// if not, create new key for user
// pick one of four options that are wine category nav links

// create a constructor that makes user Objects
function User(userName, allMealPlans, allWines) {
  this.name = userName;
  this.allMealPlans = allMealPlans;
  this.allWines = allWines;

  allUsers.push(this);
}
/// properties: name, meals array.

// create a constructor that makes wine objects
function Wine(category, varietal, protein = [], veg = [], smallPlate = [], dessert = []) {

  this.category = category;
  this.varietal = varietal;
  this.protein = protein;
  this.veg = veg;
  this.smallPlate = smallPlate;
  this.dessert = dessert;

  allWines.push(this);
}

function instantiateWineObjects() {
  new Wine('red', 'cabernet sauvignon', 'red meat', ['grilled', 'roasted'], ['burger sliders', 'beef ribs'], 'That doesn\'t pair so well in this area');
  new Wine('red', 'pinot noir', 'pork', ['grilled', 'roasted', 'Mushrooms'], ['stuffed mushrooms', 'cured meats'], 'That doesn\'t pair so well in this area');
  new Wine('red', 'merlot', ['red meats', 'pork'], 'That doesn\'t pair so well in this area', ['beef ribs', 'cheese plate'], ['chocolate cake', 'chocolate truffles', 'cherry cordials']);
  new Wine('red', 'grenache', 'pork', ['grilled', 'roasted'], ['pork belly sliders', 'street tacos'], 'That doesn\'t pair so well in this area');
  new Wine('red', 'chianti', 'red meat', ['tomatoes', 'italian herbs'], ['pizza', 'mozzerella sticks'], 'That doesn\'t pair so well in this area');
  new Wine('red', 'bordeaux blend', 'red meat', ['leafy greens', 'roasted', 'grilled'], ['burger sliders', 'beef ribs'], 'That doesn\'t pair so well in this area');
  new Wine('white', 'chardonnay', 'poultry', ['corn', 'cauliflower', 'squashes'], ['corn chowder', 'chicken tenders'], 'That doesn\'t pair so well in this area');
  new Wine('white', 'reisling', 'pork', ['butternut squash', 'pumpkin'], ['hot wings', 'pork belly sliders'], 'That doesn\'t pair so well in this area');
  new Wine('white', 'sauvignon blanc', ['fish', 'shellfish'], ['leafy greens', 'broccoli'], ['shrimp cocktail', 'mixed green salad'], 'That doesn\'t pair so well in this area');
  new Wine('white', 'pinot gris', ['poultry', 'pork'], ['squashes', 'root vegitables'], ['autumn salad', 'hot wings'], 'That doesn\'t pair so well in this area');
  new Wine('white', 'viogner', ['squashes', 'root vegitables', ['corn chowder', 'chicken tenders'], 'That doesn\'t pair so well in this area']);
  new Wine('white', 'chenin blanc', ['poultry', 'pork'], ['squashes', 'sweet potatoes'], ['autumn salad', 'mixed green salad', 'hot wings'], ['apple crumble', 'apple pie']);
  new Wine('dessert', 'sauternes', 'That doesn\'t pair so well in this area.', 'That doesn\'t pair so well in this area.', 'bleu cheeses', ['vanilla cake', 'vanilla custard', 'vanilla ice cream']);
  new Wine('dessert', 'port', 'That doesn\'t pair so well in this area.', 'That doesn\'t pair so well in this area.', 'That doesn\'t pair so well in this area.', ['chocolate cake', 'brownies', 'chocolate truffles', 'chocolate', 'caramel', 'toffee']);
  new Wine('bubbles', 'sparkling rose', 'salmon', 'That doesn\'t pair so well in this area.', ['caesar salad', 'smoked salmon'], ['cheese plate', 'backed brie']);
  new Wine('bubbles', 'prosecco', ['shell fish', 'poultry'], 'potatoes', ['french fries', 'calamari', 'fried veggie fritters'], ['cheese cake', 'fruit tart', 'cheese plate']);
  new Wine('bubbles', 'champagne', ['shell fish', 'poultry'], 'potatoes', ['french fries', 'calamari', 'fried veggie fritters'], ['raspberry cheese cake', 'fruit tart', 'cheese plate']);
}
///properties: categories, protein[], veg[], small plate[], dessert[]

//create a constructor that makes meal plan objects
function MealPlans(wineSelection, proteinSelection, vegSelection, smallPlateSelection, dessertSelection, comment = 0, userRating = 0) {
  this.wineSelection = wineSelection;
  this.proteinSelection = proteinSelection;
  this.vegSelection = vegSelection;
  this.smallPlateSelection = smallPlateSelection;
  this.dessertSelection = dessertSelection;
  this.comment = comment;
  this.userRating = userRating;

  allMealPlans.push(this);
}
///properties: wine selection, protein, veg, small plate, dessert, comment, user rating

function clickWineCategory(event) {
  userName = prompt('Username');

}

// The call-back function for our home-page wine button listener.
function varietalSelection(event) {
  var captureWineCategory = event.target.value;
  for (var i = 0; i < allWines.length; i++) {
    if (captureWineCategory === allWines[i].varietal) {
      renderFoodOptions();
    }
  //turn off event listener (maybe . . . review later)
  }
}

function renderFoodOptions() {
  // append protein, veg, sp, dessert property values as radio button form
  //call submitSelections function.
  //turn off listener.

}


// foodItemForm.addEventListener('submit', submitSelections)

function submitSelections() {
  //capture all selections as an array, and run through meal plan constructor
  //save this to local storage
  //call the renderMealPlan function
  //turn off listener
}

function renderMealPlan() {
  //take the newly constructed meal plan object
  // append to the page
}
// each item in the list is a button with an event listener to trigger the next step
// upon click, a list of items from each food category is appended to the page as a radio button
// user will make selection of one item per food category
// master submit button will take each selection, and append them as a string to the final meal plan div and push to local storage for use in the wine rack/pantry whatever.

//on pantry page, pull meal plans from local storage and append them to the page for viewing with radio buttons
function getMealPlans() {
  var myMealPlans = [];
  //get stored meal plans from local storage
  //parse them from JSON
  // push into the myMealPlans array
  // loop over array, appending each object to the page as a radio button form
  // Call the mealPlanDelete function.
}

function mealPlanDelete() {
  // Add an event listener for the radio or delete button.
  // Delete or update, as required.
  // Push to local storage.
}

//append submit button to delete selected meal plans from local storage.
//add comment text boxes, append submit button for upvotes.

// Executable functions
wineSelection.addEventListener('click', varietalSelection);

