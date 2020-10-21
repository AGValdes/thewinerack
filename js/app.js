'use strict';

var allUsers = [];

var allWines = [];
var allMealPlans = [];
var userName;

var wineSelection = document.getElementById('redWineList');

var foodParent = document.getElementById('food-parent');

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
  new Wine('red', 'Cabernet Sauvignon', ['red meat'], ['grilled', 'roasted'], ['burger sliders', 'beef ribs'], ['That doesn\'t pair so well in this area']);
  new Wine('red', 'Pinot Noir', ['pork'], ['grilled', 'roasted', 'Mushrooms'], ['stuffed mushrooms', 'cured meats'], ['That doesn\'t pair so well in this area']);
  new Wine('red', 'Merlot', ['red meats', 'pork'], ['That doesn\'t pair so well in this area'], ['beef ribs', 'cheese plate'], ['chocolate cake', 'chocolate truffles', 'cherry cordials']);
  new Wine('red', 'Grenache', ['pork'], ['grilled', 'roasted'], ['pork belly sliders', 'street tacos'], ['That doesn\'t pair so well in this area']);
  new Wine('red', 'Chianti', ['red meat'], ['tomatoes', 'italian herbs'], ['pizza', 'mozzerella sticks'], ['That doesn\'t pair so well in this area']);
  new Wine('red', 'Bordeaux Blend', ['red meat'], ['leafy greens', 'roasted', 'grilled'], ['burger sliders', 'beef ribs'], ['That doesn\'t pair so well in this area']);
  new Wine('white', 'Chardonnay', ['poultry'], ['corn', 'cauliflower', 'squashes'], ['corn chowder', 'chicken tenders'], ['That doesn\'t pair so well in this area']);
  new Wine('white', 'Reisling', ['pork'], ['butternut squash', 'pumpkin'], ['hot wings', 'pork belly sliders'], ['That doesn\'t pair so well in this area']);
  new Wine('white', 'Sauvignon Blanc', ['fish', 'shellfish'], ['leafy greens', 'broccoli'], ['shrimp cocktail', 'mixed green salad'], ['That doesn\'t pair so well in this area']);
  new Wine('white', 'pinot gris', ['poultry', 'pork'], ['squashes', 'root vegitables'], ['autumn salad', 'hot wings'], ['That doesn\'t pair so well in this area']);
  new Wine('white', 'Viogner', ['squashes', 'root vegitables'], ['corn chowder', 'chicken tenders'], ['That doesn\'t pair so well in this area']);
  new Wine('white', 'Chenin Blanc', ['poultry', 'pork'], ['squashes', 'sweet potatoes'], ['autumn salad', 'mixed green salad', 'hot wings'], ['apple crumble', 'apple pie']);
  new Wine('dessert', 'Sauternes', ['That doesn\'t pair so well in this area.'], ['That doesn\'t pair so well in this area.'], ['bleu cheeses'], ['vanilla cake', 'vanilla custard', 'vanilla ice cream']);
  new Wine('dessert', 'Port', ['That doesn\'t pair so well in this area.'], ['That doesn\'t pair so well in this area.'], ['That doesn\'t pair so well in this area.'], ['chocolate cake', 'brownies', 'chocolate truffles', 'chocolate', 'caramel', 'toffee']);
  new Wine('bubbles', 'Sparkling Rose', ['salmon'], ['That doesn\'t pair so well in this area.'], ['caesar salad', 'smoked salmon'], ['cheese plate', 'backed brie']);
  new Wine('bubbles', 'Prosecco', ['shell fish', 'poultry'], ['potatoes'], ['french fries', 'calamari', 'fried veggie fritters'], ['cheese cake', 'fruit tart', 'cheese plate']);
  new Wine('bubbles', 'Champagne', ['shell fish', 'poultry'], ['potatoes'], ['french fries', 'calamari', 'fried veggie fritters'], ['raspberry cheese cake', 'fruit tart', 'cheese plate']);
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
      renderFoodOptions(i);
      // console.log(i);
    }
  //turn off event listener (maybe . . . review later)
  }

  // console.log(captureWineCategory);
  // console.log(i);
}

function renderFoodOptions(i) {
  var protein = allWines[i].protein;
  var vegetables = allWines[i].veg;
  var smallPlates = allWines[i].smallPlate;
  var dessert = allWines[i].dessert;

  for (var j = 0; j < allWines[i].protein.length; j++) {
    var radioLabel = document.createElement('label');
    radioLabel.setAttribute('class', 'radioLabel'); //added radio label class
    radioLabel.textContent = protein[j];
    var foodChild = document.createElement('input');
    foodChild.setAttribute('class', 'radioButton'); //added radio button class
    foodChild.setAttribute('type', 'radio');
    radioLabel.appendChild(foodChild);
    var sectionParent = document.getElementById('protein');
    sectionParent.appendChild(radioLabel);
  }

  for (var k = 0; k < allWines[i].veg.length; k++) {
    var radioLabelv = document.createElement('label');
    radioLabelv.setAttribute('class', 'radioLabel'); //added radio label class
    radioLabelv.textContent = vegetables[k];
    var foodChildv = document.createElement('input');
    foodChildv.setAttribute('class', 'radioButton'); //added radio button class
    foodChildv.setAttribute('type', 'radio');
    radioLabelv.appendChild(foodChildv);
    var sectionParentv = document.getElementById('vegetables');
    sectionParentv.appendChild(radioLabelv);
  }

  for (var l = 0; l < allWines[i].smallPlate.length; l++) {
    var radioLabelSp = document.createElement('label');
    radioLabelSp.setAttribute('class', 'radioLabel'); //added radio label class
    radioLabelSp.textContent = smallPlates[l];
    var foodChildSp = document.createElement('input');
    foodChildSp.setAttribute('class', 'radioButton'); //added radio button class
    foodChildSp.setAttribute('type', 'radio');
    radioLabelSp.appendChild(foodChildSp);
    var sectionParentSp = document.getElementById('small-plates');
    sectionParentSp.appendChild(radioLabelSp);
  }

  for (var m = 0; m < allWines[i].dessert.length; m++) {
    var radioLabeld = document.createElement('label');
    radioLabeld.setAttribute('class', 'radioLabel'); //added radio label class
    radioLabeld.textContent = dessert[m];
    var foodChildd = document.createElement('input');
    foodChildd.setAttribute('class', 'radioButton'); //added radio button class
    foodChildd.setAttribute('type', 'radio');
    radioLabeld.appendChild(foodChildd);
    var sectionParentd = document.getElementById('desserts');
    sectionParentd.appendChild(radioLabeld);
  }
  wineSelection.removeEventListener('click', varietalSelection);
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

