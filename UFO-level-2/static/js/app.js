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
    tbody.html("");
    // Prevent page from refreshing
    event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

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
    
    //build array based input
    var filter = [
        {type: "datetime", name: inputDateValue}, 
        {type: "city", name: inputCityValue}, 
        {type: "state", name: inputStateValue},
        {type: "country", name: inputCountryValue},
        {type: "shape", name: inputShapeValue}
    ];

    //Go through tableData with filter
    var filteredData = tableData.filter(sighting => filter.every(filterTable => {
        if (filterTable.name === "") return true 
        return sighting[filterTable.type] === filterTable.name
    }));
    console.log(filteredData)
    //Build new table
    filteredData.forEach(function(filteredSightings){
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(function([key, value]){
            var cell = row.append("td");
            cell.html(value);
        });
    });
};

// Build table using data.js
buildTable(tableData);