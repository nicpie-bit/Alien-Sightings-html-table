// from data.js
var tableData = data;

// Get reference to table body
var tbody = d3.select("#ufo-table>tbody")

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Loop through data.js and use d3 to append and update each cell
function buildTable(data) {
    tableData.forEach((ufoSiting) => {
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
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Show what was inputted
    console.log(inputValue);
    
    //filter through data based on input
    var filteredData = tableData.filter(entry => entry.datetime === inputValue);
    
    // Show filtered data
    console.log(filteredData);

    //Set tbody to the inputValue
    

};
