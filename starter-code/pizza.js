// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function($m){
    if (state.mushrooms) {
      $m.style.visibility = "visible";
    }
    else {
      $m.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($p){
    if (state.greenPeppers) {
      $p.style.visibility = "visible";
    }
    else {
      $p.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function($q){
    if (state.whiteSauce) {
      $q.classList.add("sauce-white");
    }
    else {
      $q.classList.remove("sauce-white");
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function($r){
    if (state.glutenFreeCrust) {
      $r.classList.add("crust-gluten-free");
    }
    else {
      $r.classList.remove("crust-gluten-free");
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni) {
    document.querySelector(".btn-pepperonni").classList.add("active")
  }
  else {
    document.querySelector(".btn-pepperonni").classList.remove("active")
  }
 
  if (state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.add("active")
  }
  else {
    document.querySelector(".btn-mushrooms").classList.remove("active")
  }

  if (state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.add("active")
  }
  else {
    document.querySelector(".btn-green-peppers").classList.remove("active")
  }

  if (state.whiteSauce) {
    document.querySelector(".btn-sauce").classList.add("active")
  }
  else {
    document.querySelector(".btn-sauce").classList.remove("active")
  }

  if (state.glutenFreeCrust) {
    document.querySelector(".btn-crust").classList.add("active")
  }
  else {
    document.querySelector(".btn-crust").classList.remove("active")
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  if (state.whiteSauce) {
    let parent = document.getElementsByClassName("panel price");
    let parent2 = parent[0].querySelector("ul")
    let item = document.createElement("li")
    item.innerText = "$3 white sauce";
    parent2.appendChild(item);
  } else {
    let parent = document.getElementsByClassName("panel price");
    let items = parent[0].querySelectorAll("ul > li");
    let item = Array.from(items).filter(f => {
      return f.innerText === "$3 white sauce";
    });
    let parent2 = item[0].parentNode;
    parent2.removeChild(item[0]);
  }
  
  /*
  if (state.glutenFreeCrust) {
    let parent = document.getElementsByClassName("panel price");
    let parent2 = parent[0].querySelector("ul")
    let item = document.createElement("li")
    item.innerText = "$5 gluten-free crust";
    parent2.appendChild(item);
  } else {
    let parent = document.getElementsByClassName("panel price");
    let items = parent[0].querySelectorAll("ul > li");
    let item = Array.from(items).filter(f => {
      return f.innerText === "$5 gluten-free crust";
    });
    let parent2 = item[0].parentNode;
    parent2.removeChild(item[0]);
  }
  */
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}