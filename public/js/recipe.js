$(document).ready(function() {
	initializePage();
})

function initializePage() {
  console.log("Recipe page called initializePage");
  $.get("/recipeInstructions", getRecipe);

}


function getRecipe(result) {
  console.log(result);
  var name = GetQueryStringParams('name');
  console.log(name);
  console.log(result);

  $.each( result['recipes'], function (index, value) {
    var tempName = value.name.replace(/ /g, '');
    if( tempName == name ) {
      console.log("found a match");
      //adding name and image to html
      var htmlToInject = '<div class="col-xs-6 col-md-4" id ="' + index +
      '"> <h3> ' + value.name + ' </h3> <div class = "thumbnail"> <div class = "mealImage"> <img src = "' + value.imageURL +
      '" class="img-responsive center-block" alt="Responsive image"> </div> </div> ';
      //add ingredients to html
      htmlToInject += '<b>Ingredients</b></div>';

      // for(var k in value.ingredients.name) {
      //
      // }

       $('#recipeBody').append(htmlToInject);
   }
   });
}

function GetQueryStringParams(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}
