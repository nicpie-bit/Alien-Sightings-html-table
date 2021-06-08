// from data.js
var tableData = data;

// Get reference to table body
var tbody = d3.select("#ufo-table>tbody")

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Loop through data.js and use d3 to append and update each cell
function buildTable(event) {
    //Clear existing table
    tbody.html("");
    event.forEach((ufoSiting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSiting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form 
function runEnter() {
    // Prevent page from refreshing
    event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("city");
    var inputState = d3.select("state");
    var inputCountry = d3.select("country");
    var inputShape = d3.select("shape");

    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");

    // Show what was inputted
    console.log(inputDateValue);
    console.log(inputCityValue);
    console.log(inputStateValue);
    console.log(inputCountryValue);
    console.log(inputShapeValue);
    
    //filter through data based on input
    var filteredDate = tableData.filter(entry => entry.datetime === inputDateValue);
    var filteredCity = tableData.filter(entry => entry.city === inputCityValue);
    var filteredState = tableData.filter(entry => entry.state === inputStateValue);
    var fileteredCountry = tableData.filter(entry => entry.country === inputCountryValue);
    var filteredShape = tableData.filter(entry => entry.shape === inputShapeValue);
    
    // Show filtered data
    console.log(filteredDate);

    //Put filteredData into build function
    buildTable(filteredDate);
};

// Build table using data.js
buildTable(tableData);