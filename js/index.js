
// Get a reference to the table body
var tbody = d3.select("tbody");


//Populate the Table with Data
function appendRowsAndData(obj2) {
  var row = tbody.append("tr");

  // Below loop assumes object keys are in same order and are present every time
  Object.entries(obj2).forEach(([key, value]) => {
      row.append("td").text(value); 
  })
};

//Filter Button

  // Select the button
  var button = d3.select("#filter-btn");

  button.on("click", function() {
 // Get the values selected

 //name Dropdown
  var inputElement1 = document.getElementById('name');
  var name = inputElement1.options[inputElement1.selectedIndex].value;
 
  
//create an array
var conditions = {};

//Filter the Data

//Filter by Date if Set*/

if (name != "none" ){
  conditions.name = name;
}

console.log(conditions);

 var filteredData = data;
 newfilteredData = [];

// Filter the Data
  filteredData = data.filter(obj => {
    var criteria = true;
    Object.entries(conditions).forEach(([key, value]) => {
    //  console.log(obj[key]);
      criteria = criteria && (obj[key] === value);
    });
    //console.log(filteredData);
    //console.log(criteria);
    if (criteria == true ){
    //  filteredData.push([obj]);
      newfilteredData.push([obj]);
    }
    return criteria;
});

// Write to the Console
console.log(filteredData);
console.log(newfilteredData);

// Run the function to Populate the Table
tbody.html("");

if (filteredData.length > 0){
  filteredData.forEach(appendRowsAndData);
  }
  else{
    alert("No Results Match Your Selection!")
}

});

  

// Clear any existing table data if exists when user enters input field
function myFunction(x) {
  d3.select('#dealer-table').selectAll("td").remove();
}  