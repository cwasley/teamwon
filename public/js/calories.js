var sumCalories = 0;

$(document).ready(function() {
	initializePage();
})

function initializePage() {
  console.log("Getting eatenList");
  $.get("/eatenList", getEatenList);

  // ADD click listener here
  // DELETE click listener here

}

function getEatenList(result) {
  console.log(result);
  $.each( result['eaten'], function (index, value) {
    sumCalories = sumCalories + (value.quantity * value.calories);
    var htmlToInject = '<div id="' + index + '"> <label>' +
    '<p name="item" value="">' + 'Name: ' + value.name +
    ' Quantity: ' + value.quantity +
    ' <br> ' +
    ' Calories Each: ' + value.calories +
    ' Calories: ' + (value.quantity * value.calories) +
    '</label></div>';
		//groceryList_local.push({name: value.name, quantity: value.quantity, units: value.units, toDelete: false});
    //console.log(groceryList_local);
    $('#eatenList').append(htmlToInject);
  });
  $('#eatenList').append(
    '<h2> Total Calories: ' + sumCalories
  );
}