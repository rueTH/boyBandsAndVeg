var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount_bands = bands.length;
var loopCount_veggies = veggies.length;

// Keep track of which band we're on in the loop
var current_band = "";

// Keep track of which veggie we're on in the loop
var current_veggie = "";

// Get a reference to the appropriate DOM element for bands
var element_band = document.getElementById("boyBands");

// Get a reference to the appropriate DOM element for vegetables
var element_veggie = document.getElementById("veggies");

// Start looping

for (i=0; i < loopCount_bands; i++) {
  var elBand = document.createElement ("b#");
  elBand.innerHTML = bands[i];
  element_band.appendChild(elBand);
};

for (i=0; i < loopCount_veggies; i++) {
  var elVeg = document.createElement ("b#");
  element_veggie.appendChild(elVeg);
}
