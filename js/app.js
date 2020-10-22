'use strict';

var allUsers = [];

var allWines = [];
var allMealPlans = [];
var userMeal;
var mealArray = [];
var wineSelection = document.getElementById('redWineList');
var submitButton = document.createElement('button');
var newUserSwitch = true;

var foodForm = document.getElementById('food-parent');






// check local storage for that input
// if user name is in local storage, pull existing info
// if not, create new key for user
// pick one of four options that are wine category nav links

// this function takes in the user's name, all of their already established meal plans, and all of the available wine choices, and turns that into one packaged object thing. We will eventually be pushing these object into local storage, so we can pull them out on the personal page.


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
  new Wine('Red', 'Cabernet Sauvignon', ['Steak', 'Beef Short Ribs', 'Chuck Roast', 'Ground Beef', 'No, Thank You'], ['Grilled Zucchini', 'Brussel Sprouts', 'No, Thank You'], ['Burger Sliders', 'Beef Ribs', 'No, Thank You'], ['Chocolate Mousse', 'Cheese and Nut Plate', 'Vanilla Pannacotta', 'No, Thank You']);
  new Wine('Red', 'Pinot Noir', ['Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Grilled Zucchini', 'Brussel Sprouts', 'Mushrooms', 'No, Thank You'], ['Stuffed Mushrooms', 'Cured Meats', 'No, Thank You'], ['No pairing']);
  new Wine('Red', 'Merlot', ['Steak', 'Beef Short Ribs', 'Chuck Roast', 'Ground Beef', 'Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Charred Brussel Sprouts', 'No, Thank You'], ['Beef Ribs', 'Cheese Plate', 'No, Thank You'], ['Chocolate Cake', 'Chocolate Truffles', 'Cherry Cordials', 'No, Thank You']);
  new Wine('Red', 'Grenache', ['Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Grilled Zucchini', 'Brussel Sprouts', 'No, Thank You'], ['Pork Belly Sliders', 'Street Tacos', 'No, Thank You'], ['No pairing']);
  new Wine('Red', 'Chianti', ['Steak', 'Beef Short Ribs', 'Chuck Roast', 'Ground Beef', 'No, Thank You'], ['Tomatoes', 'Italian Herbs', 'No, Thank You'], ['Pizza', 'Mozzarella Sticks', 'No, Thank You'], ['No pairing']);
  new Wine('Red', 'Bordeaux Blend', ['Steak', 'Beef Short Ribs', 'Chuck Roast', 'Ground Beef', 'No, Thank You'], ['Leafy Greens', 'Brussel Sprouts', 'Grilled Zucchini', 'No, Thank You'], ['Burger Sliders', 'Beef Ribs', 'No, Thank You'], ['No pairing']);
  new Wine('White', 'Chardonnay', ['Chicken', 'Turkey', 'Duck', 'No, Thank You'], ['Corn', 'Cauliflower', 'Squashes', 'No, Thank You'], ['Corn Chowder', 'Chicken Tenders', 'No, Thank You'], ['No pairing']);
  new Wine('White', 'Riesling', ['Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Butternut Squash', 'Pumpkin', 'No, Thank You'], ['Hot Wings', 'Pork Belly Sliders', 'No, Thank You'], ['No pairing']);
  new Wine('White', 'Sauvignon Blanc', ['Fish', 'Shellfish', 'No, Thank You'], ['Leafy Greens', 'Broccoli', 'No, Thank You'], ['Shrimp Cocktail', 'Mixed Green Salad', 'No, Thank You'], ['No pairing']);
  new Wine('White', 'Pinot Gris', ['Chicken', 'Turkey', 'Duck', 'Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs'], ['Squashes', 'Root Vegetables', 'No, Thank You'], ['Autumn Salad', 'Hot Wings', 'No, Thank You'], ['No pairing']);
  new Wine('White', 'Viognier', ['Squashes', 'Root Vegetables', 'No, Thank You'], ['Corn Chowder', 'Chicken Tenders', 'No, Thank You'], ['No pairing']);
  new Wine('White', 'Chenin Blanc', ['Chicken', 'Turkey', 'Duck', 'Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Squashes', 'Sweet Potatoes', 'No, Thank You'], ['Autumn Salad', 'Mixed Green Salad', 'Hot Wings', 'No, Thank You'], ['Apple Crumble', 'Apple Pie', 'No, Thank You']);
  new Wine('Dessert', 'Sauternes', ['Foie Gras', 'No, Thank You'], ['No pairing'], ['Bleu Cheeses', 'No, Thank You'], ['Vanilla Cake', 'Vanilla Custard', 'Vanilla Ice Cream', 'No, Thank You']);
  new Wine('Dessert', 'Port', ['Duck', 'Rabbit', 'No, Thank You'], ['No pairing'], ['Stuffed Dates', 'No, Thank You'], ['Chocolate Cake', 'Brownies', 'Chocolate Truffles', 'Chocolate', 'Caramel', 'Toffee', 'No, Thank You']);
  new Wine('Bubbles', 'Sparkling Rosé', ['Salmon', 'No, Thank You'], ['No pairing', 'No, Thank You'], ['Caesar Salad', 'Smoked Salmon', 'No, Thank You'], ['Cheese Plate', 'Baked Brie', 'No, Thank You']);
  new Wine('Bubbles', 'Prosecco', ['Shellfish', 'Chicken', 'Turkey', 'Duck', 'No, Thank You'], ['Potatoes', 'No, Thank You'], ['French Fries', 'Calamari', 'Fried Veggie Fritters', 'No, Thank You'], ['Cheese Cake', 'Fruit Tart', 'Cheese Plate', 'No, Thank You']);
  new Wine('Bubbles', 'Champagne', ['Shellfish', 'Chicken', 'Turkey', 'Duck', 'No, Thank You'], ['Potatoes', 'No, Thank You'], ['French Fries', 'Calamari', 'Fried Veggie Fritters', 'No, Thank You'], ['Raspberry Cheese Cake', 'Fruit Tart', 'Cheese Plate', 'No, Thank You']);
}
///properties: categories, protein[], veg[], small plate[], dessert[]

//create a constructor that makes meal plan objects
// function MealPlans(wineSelection, proteinSelection, vegSelection, smallPlateSelection, dessertSelection, comment = 0, userRating = 0) {
//   this.wineSelection = wineSelection;
//   this.proteinSelection = proteinSelection;
//   this.vegSelection = vegSelection;
//   this.smallPlateSelection = smallPlateSelection;
//   this.dessertSelection = dessertSelection;
//   this.comment = comment;
//   this.userRating = userRating;

//   allMealPlans.push(this);
//}
///properties: wine selection, protein, veg, small plate, dessert, comment, user rating



// The call-back function for our home-page wine button listener.
function varietalSelection(event) {
  // if (newUserSwitch === false) {
  //   var userName = prompt('Enter your username.');
  // }
  var captureWineCategory = event.target.value;
  for (var i = 0; i < allWines.length; i++) {
    if (captureWineCategory === allWines[i].varietal) {
      renderFoodOptions(i);

      // allWinesChosen.push(captureWineCategory);
      // console.log(allWines[i].varietal);

      // mealArray = [];
      // mealArray.push(userName);
      mealArray.push(allWines[i].varietal);
    }
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
    foodChild.setAttribute('required', 'true'); //requires radio selection
    foodChild.setAttribute('value', protein[j]);

    foodChild.setAttribute('type', 'radio');
    radioLabel.setAttribute('class', 'selectedFood');
    foodChild.setAttribute('name', 'protein');
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
    foodChildv.setAttribute('required', 'true'); //requires radio selection
    foodChildv.setAttribute('type', 'radio');
    radioLabelv.setAttribute('class', 'selectedFood');
    foodChildv.setAttribute('name', 'vegetables');
    foodChildv.setAttribute('value', vegetables[k]);
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
    foodChildSp.setAttribute('required', 'true'); //requires radio selection
    foodChildSp.setAttribute('type', 'radio');
    radioLabelSp.setAttribute('class', 'selectedFood');
    foodChildSp.setAttribute('name', 'smallPlates');
    foodChildSp.setAttribute('value', smallPlates[l]);
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
    foodChildd.setAttribute('required', 'true'); //requires radio selection
    foodChildd.setAttribute('type', 'radio');
    radioLabeld.setAttribute('class', 'selectedFood');
    foodChildd.setAttribute('name', 'dessert');
    foodChildd.setAttribute('value', dessert[m]);
    //foodChildd.setAttribute('class', 'foodOption');
    radioLabeld.appendChild(foodChildd);
    var sectionParentd = document.getElementById('desserts');
    sectionParentd.appendChild(radioLabeld);
  }

  wineSelection.removeEventListener('click', varietalSelection);
  renderSubmitButton();

}


function renderSubmitButton() {
  // var foodForm = document.getElementById('food-parent');
  submitButton.textContent = 'Submit Your Choices';
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'submitbutton');
  foodForm.appendChild(submitButton);
}

// var foodForm = document.getElementsById('food-parent');

function submitSelections(event) {
  //we want the computer to take all the selections and push them into an array
  event.preventDefault();
  // var myRadio = document.getElementsByName('vegetables');

  // console.log(event);
  // var mealArray = [];
  for (var i = 0; i < event.target.length; i++) {
    if (event.target[i].checked === true) {
      // console.log(event.target[i].value);
      mealArray.push(event.target[i].value);
      // console.log(mealArray);
    }
  }
  // submitButton.innerHTML = ;
  initiateStorage();
  // renderYourWineRack();
  turnOffEventListeners();
  window.open('../pages/yourWineRack.html', '_self');

}

function initiateStorage() { //other option might be pull from local storage here and push mealArray into all meals prior to pushing to storage

  var oldMealsFromStorage = localStorage.getItem('allUserMeals');
  var parsedOldMealsFromStorage = JSON.parse(oldMealsFromStorage);

  console.log('parsedOldMealsFromStorage', parsedOldMealsFromStorage);

  if (parsedOldMealsFromStorage) {

    allMealPlans = parsedOldMealsFromStorage;
  }
  allMealPlans.push(mealArray);



  var stringifyAllMealPlans = JSON.stringify(allMealPlans);
  localStorage.setItem('allUserMeals', stringifyAllMealPlans);

  console.log('allMealPlans', allMealPlans);

  //var mealArrayStringified = JSON.stringify(mealArray);
  var allMealPlansStringified = JSON.stringify(allMealPlans);
  //localStorage.setItem('userMeal', mealArrayStringified);
  localStorage.setItem('allUserMeals', allMealPlansStringified);
}

function renderMealPlan() {
  var retrieveStorage = localStorage.getItem('allUserMeals');
  var parsedStorage = JSON.parse(retrieveStorage);

  var theadParent = document.getElementById('theadParent');

  console.log('parsedStorage.length', parsedStorage.length);
  console.log('parsed at 0:', parsedStorage[0]);

  for (var i = 0; i < parsedStorage.length; i++) {
    var trElement = document.createElement('tr');
    for (var j = 0; j < 5; j++) {

      var tdElement = document.createElement('td');
      tdElement.textContent = parsedStorage[i][j];
      trElement.appendChild(tdElement);
      console.log('parsedStorage[i][j]', parsedStorage[i][j], 'i:', i, 'j', j);
    }
    theadParent.appendChild(trElement);

  }
  // var retrieveStorage = localStorage.getItem('userMeal');
  // var parsedStorage = JSON.parse(retrieveStorage);

  // var theadParent = document.getElementById('theadParent');
  // var trElement = document.createElement('tr');
  // for (var i = 0; i < 6; i++) {
  //   var tdElement = document.createElement('td');
  //   tdElement.textContent = parsedStorage[i];
  //   trElement.appendChild(tdElement);
  //   console.log(parsedStorage);

  // }
  console.log(theadParent);
  console.log(trElement);
}
// each item in the list is a button with an event listener to trigger the next step
// upon click, a list of items from each food category is appended to the page as a radio button
// user will make selection of one item per food category
// master submit button will take each selection, and append them as a string to the final meal plan div and push to local storage for use in the wine rack/pantry whatever.

//on pantry page, pull meal plans from local storage and append them to the page for viewing with radio buttons


function mealPlanDelete() {
  // Add an event listener for the radio or delete button.
  // Delete or update, as required.
  // Push to local storage.
}

function determineHTMLPage() {
  if (document.URL.includes('reds.html') || document.URL.includes('whites.html') || document.URL.includes('bubbles.html') || document.URL.includes('desserts.html')) {
    wineSelection.addEventListener('click', varietalSelection);
    foodForm.addEventListener('submit', submitSelections);
  }
}

function turnOffEventListeners() {
  wineSelection.removeEventListener('click', varietalSelection);
  foodForm.removeEventListener('submit', submitSelections);
}

function runRenderMealPlan() {
  if (document.URL.includes('yourWineRack.html')) {
    renderMealPlan();

  }

}

//append submit button to delete selected meal plans from local storage.
//add comment text boxes, append submit button for upvotes.

// Executable functions
instantiateWineObjects();
determineHTMLPage();
runRenderMealPlan();
