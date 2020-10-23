'use strict';

// Global variables
var allWines = [];
var allMealPlans = [];
var mealArray = [];
var wineSelection = document.getElementById('redWineList');
var submitButton = document.createElement('button');
var foodForm = document.getElementById('food-parent');
var submitButtonTwoElectricBoogaloo = document.getElementById('new-wine');

// Functions
function Wine(category, varietal, protein = [], veg = [], smallPlate = [], dessert = []) { // This constructor function makes wine object instances.

  this.category = category;
  this.varietal = varietal;
  this.protein = protein;
  this.veg = veg;
  this.smallPlate = smallPlate;
  this.dessert = dessert;

  allWines.push(this);
}

function instantiateWineObjects() { // This function defines the hard-coded wine pairings.
  new Wine('Red', 'Cabernet Sauvignon', ['Steak', 'Beef Short Ribs', 'Chuck Roast', 'Ground Beef', 'No, Thank You'], ['Grilled Zucchini', 'Brussel Sprouts', 'No, Thank You'], ['Burger Sliders', 'Beef Ribs', 'No, Thank You'], ['Chocolate Mousse', 'Cheese and Nut Plate', 'Vanilla Pannacotta', 'No, Thank You']);
  new Wine('Red', 'Pinot Noir', ['Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Grilled Zucchini', 'Brussel Sprouts', 'Mushrooms', 'No, Thank You'], ['Stuffed Mushrooms', 'Cured Meats', 'No, Thank You'], ['No Pairing']);
  new Wine('Red', 'Merlot', ['Steak', 'Beef Short Ribs', 'Chuck Roast', 'Ground Beef', 'Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Charred Brussel Sprouts', 'No, Thank You'], ['Beef Ribs', 'Cheese Plate', 'No, Thank You'], ['Chocolate Cake', 'Chocolate Truffles', 'Cherry Cordials', 'No, Thank You']);
  new Wine('Red', 'Grenache', ['Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Grilled Zucchini', 'Brussel Sprouts', 'No, Thank You'], ['Pork Belly Sliders', 'Street Tacos', 'No, Thank You'], ['No Pairing']);
  new Wine('Red', 'Chianti', ['Steak', 'Beef Short Ribs', 'Chuck Roast', 'Ground Beef', 'No, Thank You'], ['Tomatoes', 'Italian Herbs', 'No, Thank You'], ['Pizza', 'Mozzarella Sticks', 'No, Thank You'], ['No Pairing']);
  new Wine('Red', 'Bordeaux Blend', ['Steak', 'Beef Short Ribs', 'Chuck Roast', 'Ground Beef', 'No, Thank You'], ['Leafy Greens', 'Brussel Sprouts', 'Grilled Zucchini', 'No, Thank You'], ['Burger Sliders', 'Beef Ribs', 'No, Thank You'], ['No Pairing']);
  new Wine('White', 'Chardonnay', ['Chicken', 'Turkey', 'Duck', 'No, Thank You'], ['Corn', 'Cauliflower', 'Squashes', 'No, Thank You'], ['Corn Chowder', 'Chicken Tenders', 'No, Thank You'], ['No Pairing']);
  new Wine('White', 'Riesling', ['Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Butternut Squash', 'Pumpkin', 'No, Thank You'], ['Hot Wings', 'Pork Belly Sliders', 'No, Thank You'], ['No Pairing']);
  new Wine('White', 'Sauvignon Blanc', ['Fish', 'Shellfish', 'No, Thank You'], ['Leafy Greens', 'Broccoli', 'No, Thank You'], ['Shrimp Cocktail', 'Mixed Green Salad', 'No, Thank You'], ['No Pairing']);
  new Wine('White', 'Pinot Gris', ['Chicken', 'Turkey', 'Duck', 'Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs'], ['Squashes', 'Root Vegetables', 'No, Thank You'], ['Autumn Salad', 'Hot Wings', 'No, Thank You'], ['No Pairing']);
  new Wine('White', 'Viognier', ['Squashes', 'Root Vegetables', 'No, Thank You'], ['Corn Chowder', 'Chicken Tenders', 'No, Thank You'], ['No Pairing']);
  new Wine('White', 'Chenin Blanc', ['Chicken', 'Turkey', 'Duck', 'Pork Chops', 'Pork Tenderloin', 'Pork Spare Ribs', 'No, Thank You'], ['Squashes', 'Sweet Potatoes', 'No, Thank You'], ['Autumn Salad', 'Mixed Green Salad', 'Hot Wings', 'No, Thank You'], ['Apple Crumble', 'Apple Pie', 'No, Thank You']);
  new Wine('Dessert', 'Sauternes', ['Foie Gras', 'No, Thank You'], ['No Pairing'], ['Bleu Cheeses', 'No, Thank You'], ['Vanilla Cake', 'Vanilla Custard', 'Vanilla Ice Cream', 'No, Thank You']);
  new Wine('Dessert', 'Port', ['Duck', 'Rabbit', 'No, Thank You'], ['No Pairing'], ['Stuffed Dates', 'No, Thank You'], ['Chocolate Cake', 'Brownies', 'Chocolate Truffles', 'Chocolate', 'Caramel', 'Toffee', 'No, Thank You']);
  new Wine('Bubbles', 'Sparkling Rosé', ['Salmon', 'No, Thank You'], ['No Pairing', 'No, Thank You'], ['Caesar Salad', 'Smoked Salmon', 'No, Thank You'], ['Cheese Plate', 'Baked Brie', 'No, Thank You']);
  new Wine('Bubbles', 'Prosecco', ['Shellfish', 'Chicken', 'Turkey', 'Duck', 'No, Thank You'], ['Potatoes', 'No, Thank You'], ['French Fries', 'Calamari', 'Fried Veggie Fritters', 'No, Thank You'], ['Cheese Cake', 'Fruit Tart', 'Cheese Plate', 'No, Thank You']);
  new Wine('Bubbles', 'Champagne', ['Shellfish', 'Chicken', 'Turkey', 'Duck', 'No, Thank You'], ['Potatoes', 'No, Thank You'], ['French Fries', 'Calamari', 'Fried Veggie Fritters', 'No, Thank You'], ['Raspberry Cheese Cake', 'Fruit Tart', 'Cheese Plate', 'No, Thank You']);

  var allWinesAsAString = JSON.stringify(allWines);
  localStorage.setItem('allWinesKey', allWinesAsAString);
}

function varietalSelection(event) { // The call-back function for our home-page wine button listener.
  var captureWineCategory = event.target.value;
  for (var i = 0; i < allWines.length; i++) {
    if (captureWineCategory === allWines[i].varietal) {
      console.log('test');
      renderFoodOptions(i);

      mealArray.push(allWines[i].varietal);
    }
  }
}

function renderFoodOptions(i) { // This function writes all food options to the DOM as clickable radio buttons.
  var retrieveAllWines = JSON.parse(localStorage.getItem('allWinesKey'));

  var protein = retrieveAllWines[i].protein;
  var vegetables = retrieveAllWines[i].veg;
  var smallPlates = retrieveAllWines[i].smallPlate;
  var dessert = retrieveAllWines[i].dessert;

  for (var j = 0; j < retrieveAllWines[i].protein.length; j++) {
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

  for (var k = 0; k < retrieveAllWines[i].veg.length; k++) {
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

  for (var l = 0; l < retrieveAllWines[i].smallPlate.length; l++) {
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

  for (var m = 0; m < retrieveAllWines[i].dessert.length; m++) {
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

function renderSubmitButton() { // This function writes the submit button to the DOM 
  submitButton.textContent = 'Submit Your Choices';
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'submitbutton');
  foodForm.appendChild(submitButton);
}

function submitSelections(event) { // This call-back function responds to the submit button's click listener to push the chosen items in an array called mealArray; it then turns the event listener off.
  event.preventDefault();
  for (var i = 0; i < event.target.length; i++) {
    if (event.target[i].checked === true) {
      mealArray.push(event.target[i].value);
    }
  }
  initiateStorage();
  turnOffEventListeners();
  window.open('../pages/yourWineRack.html', '_self');
}

function initiateStorage() { // This function stores the meal plan in local storage.
  var oldMealsFromStorage = localStorage.getItem('allUserMeals');
  var parsedOldMealsFromStorage = JSON.parse(oldMealsFromStorage);

  if (parsedOldMealsFromStorage) {
    allMealPlans = parsedOldMealsFromStorage;
  }
  allMealPlans.push(mealArray);

  var stringifyAllMealPlans = JSON.stringify(allMealPlans);
  localStorage.setItem('allUserMeals', stringifyAllMealPlans);

  var allMealPlansStringified = JSON.stringify(allMealPlans);
  localStorage.setItem('allUserMeals', allMealPlansStringified);
}

function renderMealPlan() { // This function takes the meal plans out of local storage and writes them to the DOM in the form of a table.
  var retrieveStorage = localStorage.getItem('allUserMeals');
  var parsedStorage = JSON.parse(retrieveStorage);
  var theadParent = document.getElementById('theadParent');

  for (var i = 0; i < parsedStorage.length; i++) {
    var trElement = document.createElement('tr');
    for (var j = 0; j < 5; j++) {

      var tdElement = document.createElement('td');
      tdElement.textContent = parsedStorage[i][j];
      trElement.appendChild(tdElement);
    }
    theadParent.appendChild(trElement);
  }
}

function determineHTMLPage() { // This function determines which HTML page the user is on to ensure that the correct JS runs.
  if (document.URL.includes('reds.html') || document.URL.includes('whites.html') || document.URL.includes('bubbles.html') || document.URL.includes('desserts.html')) {
    wineSelection.addEventListener('click', varietalSelection);
    foodForm.addEventListener('submit', submitSelections);
  }
}

function turnOffEventListeners() { // This function turns off both event listeners.
  wineSelection.removeEventListener('click', varietalSelection);
  foodForm.removeEventListener('submit', submitSelections);
}

function runRenderMealPlan() { // This function makes sure that the user is on the personalized wine rack page before selections to the table.
  if (document.URL.includes('yourWineRack.html')) {
    renderMealPlan();
    submitButtonTwoElectricBoogaloo.addEventListener('submit', newWineCapture);
  }
}

function newWineCapture(event) {
  event.preventDefault();
  var newVarietal = event.target.wineVarietal.value;
  var newProtein = event.target.wineProtein.value;
  var newVegetable = event.target.wineVegetable.value;
  var newSmallPlate = event.target.wineSmallPlate.value;
  var newDessert = event.target.wineDessert.value;
  updateWineObjects(newVarietal, newProtein, newVegetable, newSmallPlate, newDessert);

  newPairingTableRow(newVarietal, newProtein, newVegetable, newSmallPlate, newDessert);
}

function newPairingTableRow(newVarietal, newProtein, newVegetable, newSmallPlate, newDessert) {
  var newVarietalArray = [];
  newVarietalArray.push(newVarietal, newProtein, newVegetable, newSmallPlate, newDessert);

  var theadParent = document.getElementById('theadParent');
  var trElement = document.createElement('tr');
  for (var i = 0; i < newVarietalArray.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = newVarietalArray[i];
    trElement.appendChild(tdElement);
  }
  theadParent.appendChild(trElement);
}

function updateWineObjects(newVarietal, newProtein, newVegetable, newSmallPlate, newDessert) {
  var retrieveAllWines = JSON.parse(localStorage.getItem('allWinesKey'));

  for (var i = 0; i < retrieveAllWines.length; i++) {
    if (retrieveAllWines[i].varietal === newVarietal) {
      retrieveAllWines[i].protein.unshift(newProtein);
      retrieveAllWines[i].veg.unshift(newVegetable);
      retrieveAllWines[i].smallPlate.unshift(newSmallPlate);
      retrieveAllWines[i].dessert.unshift(newDessert);

    }
  }
  var retrievedAllWinesStringified = JSON.stringify(retrieveAllWines);
  localStorage.setItem('allWinesKey', retrievedAllWinesStringified);
}

function checkWineStorage() {
  if (!localStorage.allWinesKey) {
    instantiateWineObjects();
  } else {
    var retrievedAllWines = JSON.parse(localStorage.getItem('allWinesKey'));

    for (var i = 0; i < retrievedAllWines.length; i++) {
      var wineObject = retrievedAllWines[i];
      var category = wineObject.category;
      var varietal = wineObject.varietal;
      var protein = wineObject.protein;
      var vegetable = wineObject.veg;
      var smallPlate = wineObject.smallPlate;
      var dessert = wineObject.dessert;

      new Wine(category, varietal, protein, vegetable, smallPlate, dessert);
    }
  }
}

function mealPlanDelete() { // Stretch goal.
  // Add an event listener for the radio or delete button.
  // Delete or update, as required.
  // Push to local storage.
}


// Executable functions
determineHTMLPage();
checkWineStorage();
runRenderMealPlan();
