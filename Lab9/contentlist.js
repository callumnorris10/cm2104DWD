$(function(){
	// 'main' function called when page is loaded and ready

	// complete the following using jQuery

	// 1. find the addcontent button in task-two.html
	// 2. add an event listener for 'click' events
	// 3. assign the addContent() function to the click event
});
$(function(){
    $('#addcontent').click(addContent() {
        
    });
});
function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];
	var
	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>";
	$('#task2').html(items_html);

	// using jQuery
	// 1. find the content div
	// 2. modify its html attribute by adding items_html

}
