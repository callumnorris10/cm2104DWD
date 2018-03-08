$(function(){
  //document ready message
  alert("document ready");

    $('#searchform').submit(function(){
      var searchterms = $("#searchterms").val();
      //call our search youtube function
      getResultsFromOMDB(searchterms);
      return false;

    });
});

function getResultsFromOMDB(searchterms) {
  //call YT API using ajax
  //build url for the request
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=ca61c48a&s=" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata){
    //handle results
    printJSON(jsondata);
  });

}
function printJSON(jsondata){
  //prints the json on the user's screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}
