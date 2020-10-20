'use strict';
var allWines = [];
var allMealPlans = [];
var allUsers = [];
// // get user name input
// function getUserName() {
//   var userName = document.getElementById('nameInput').value;
//   //need info from html
//   var userNameFromLocalStorage = localStorage.getItem(userName);
//   var parsedUserName = JSON.parse(userNameFromLocalStorage);
//   if (userNameFromLocalStorage) {

//   } else {
//     JSON.stringify(userName)
//     //missing some info to complete this function
//     localStorage.setItem(userName),
//       //instantiate our wine categories
//       instantiateWineObjects();
//   }
// }
// idOfForm.addEventListener('submit', getUserName);

// check local storage for that input
// if user name is in local storage, pull existing info
// if not, create new key for user
// pick one of four options that are wine category nav links

// create a constructor that makes user Objects
function User(userName, allMealPlans) {
  this.name = userName;
  this.allMealPlans = allMealPlans;

  allUsers.push(this);
}
/// properties: name, meals array.

// create a constructor that makes wine objects
function Wine(catagory, varietal, protein = [], veg = [], smallPlate = [], dessert = []) {

  this.catagory = catagory;
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
instantiateWineObjects();
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

//display an unordered list of wines that match that category
function renderWineList() {
  //catagory selection from the home page
  //set up event listener on each category of the home page
  // on click, capture what catagory is in a global variable, and follow link to next page.
  //for loop over the length of the allWines array, looking for that catagory variable.
  //append button for each varietal
  //call varietalSelection function
  //turn off event listener
}
//event handler for click of a varietal
winebutton.addEventListener('click', varietalSelection)

function varietalSelection() {
  //capture the varietal in a variable
  // loop through all wines, looking for that varietal
  // append protein, veg, sp, dessert property values as radio button form
  //call submitSelections function.
  //turn off listener.
}

foodItemForm.addEventListener('submit', submitSelections)

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
// upon click, a list of items from each food catagory is appended to the page as a radio button
// user will make selection of one item per food category
// master submit button will take each selection, and append them as a string to the final meal plan div and push to local storage for use in the winerack/pantry whatever.

//on pantry page, pull meal plans from local storage and append them to the page for viewing with radio buttons
function getMealPlans() {
  var myMealPlans = [];
  //get stored meal plans from local storage
  //parse them from JSON
  // push into the myMealPlans array
  // loop over array, appending each object to the page as a radio button form
}

//append submit button to delete selected meal plans from local storage.
//add comment text boxes, append submit button for upvotes.

