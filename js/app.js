//grab from html document
const filterForm = document.getElementById("filterForm");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const modelYearInput = document.getElementById("yearFilter");
const manufacturerInput = document.getElementById("manufacturerFilter");
const colorInput = document.getElementById("colorFilter");
const infoButton = document.getElementById("infoBtn");
// wait for user to click filter button
document.getElementById("filterBtn").addEventListener("click", filter);
// wait for user to click reset button
document.getElementById("resetBtn").addEventListener("click", reset);

document.getElementById("infoBtn").addEventListener("click", info);

// //display more information about car (not implemeneted)
// function info() {
//   moreInfo.style.display = "none";
// }

// resets filters to default values and calls filter() to show all results
function reset() {
  minPriceInput.value = "0";
  maxPriceInput.value = "100000";
  modelYearInput.value = "anyYear";
  manufacturerInput.value = "anyManufacturer";
  colorInput.value = "anyColor";
  filter();
}

function filter() {
  //grab input of all floats
  const minPrice = parseFloat(minPriceInput.value);
  const maxPrice = parseFloat(maxPriceInput.value);
  const modelYear = modelYearInput.value;

  //grab other input
  const manufacturer = manufacturerInput.value;
  const color = colorInput.value;

  // select 'card' objects
  const cards = document.querySelectorAll(".card");

  // grab prices input into filter by user
  cards.forEach((card) => {
    const cardPrice = parseFloat(card.getAttribute("carPrice"));
    const cardManufacturer = card.getAttribute("carManufacturer");
    const cardColor = card.getAttribute("carColor");
    const cardYear = card.getAttribute("carYear");

    if (
      // select car within price range
      cardPrice >= minPrice &&
      cardPrice <= maxPrice &&
      // select a manufacturer or show all
      (manufacturer === "anyManufacturer" ||
        cardManufacturer == manufacturer) &&
      // select color or all colors
      (color === "anyColor" || cardColor === color) &&
      // select model year or all years
      (modelYear === "anyYear" || cardYear === modelYear)
    ) {
      //display cards that match filter criteria
      card.style.display = "inline-block";
    } else {
      // hide cards that do not match filter criteria
      card.style.display = "none";
    }
  });
}
