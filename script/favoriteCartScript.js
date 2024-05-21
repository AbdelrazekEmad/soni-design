// Select all elements with class 'addFavorite'
var addFavoriteButtons = document.querySelectorAll('.addFavorite');
// Loop through each addFavorite button
addFavoriteButtons.forEach(function(button) {
  // Add click event listener to each addFavorite button
  button.onclick = function () {
    var currentColor = button.style.backgroundColor;
    var newColor = 'red';
    button.style.backgroundColor = currentColor === newColor ? '' : newColor;
  };
});

// Select all elements with class 'addCart'
var addCartButtons = document.querySelectorAll('.addCart');
// Loop through each addCart button
addCartButtons.forEach(function(button) {
  // Add click event listener to each addCart button
  button.onclick = function () {
    var currentColor = button.style.backgroundColor;
    var newColor = 'green';
    button.style.backgroundColor = currentColor === newColor ? '' : newColor;
  };
});

// Select all elements with class 'addPackageCart'
var addPackageCartButtons = document.querySelectorAll('.addPackageCart');
// Loop through each addPackageCart button
addPackageCartButtons.forEach(function(button) {
  // Add click event listener to each addPackageCart button
  button.onclick = function () {
    var currentColor = button.style.backgroundColor;
    var newColor = 'green';
    button.style.backgroundColor = currentColor === newColor ? '' : newColor;
  };
});

