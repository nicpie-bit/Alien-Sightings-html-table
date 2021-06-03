// from data.js
var tableData = data;

// Get reference to table body
var tbody = d3.select("#ufo-table>tbody")

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// BONUS: Refactor to use Arrow Functions!
tableData.forEach((ufoSiting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSiting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


