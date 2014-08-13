$(function(){
	var titleOfContents = $(".titleOfContents");
	//titleOfContents.text("New Title");

	var textOfContents = $(".textOfContents");
	//textOfContents.text("New text");

	var contentsDiv = $(".contents");

	var articleNumber = 0; //starts at 0. increases when > button is clicked. decreases when < button is clicked.
	window.articleNumber; //globalize this variable
	//var arrayOfTitles, arrayOfContents;
	function init(){
		updateMainPage();
		assignFunctionsToArrowButtons();
		hidePreviousArrowWhenThePageLoads();
	}

	function updateMainPage(){
		titleOfContents.text(arrayOfTitles[0]);
		textOfContents.text(arrayOfContents[0]);
	}

	function hidePreviousArrowWhenThePageLoads(){
		var previousButton = $("#leftArrow");
		previousButton.hide();
	}

	function goToPreviousArticle(){
		var previousButton = $("#leftArrow");
		var nextButton = $("#rightArrow");
		articleNumber--;
		contentsDiv.hide("slide", {direction: "right"}, 200);
		contentsDiv.show("slide", {direction: "left"}, 200);
		titleOfContents.text(arrayOfTitles[articleNumber]);
		textOfContents.text(arrayOfContents[articleNumber]);
		if (!arrayOfTitles[articleNumber-1]){
			previousButton.hide();
			previousButton.on("click", function(){
				previousButton.show();
			});
		}
	}

	function goToNextArticle(){
		var previousButton = $("#leftArrow");
		var nextButton = $("#rightArrow");
		articleNumber++;
		contentsDiv.hide("slide", {direction: "left"}, 200);
		contentsDiv.show("slide", {direction: "right"}, 200);
		titleOfContents.text(arrayOfTitles[articleNumber]);
		textOfContents.text(arrayOfContents[articleNumber]);
		if (!arrayOfTitles[articleNumber+1]){
			nextButton.hide();
			previousButton.on("click", function(){
				nextButton.show();
			});
		}
		if (arrayOfTitles[articleNumber-1]){
			previousButton.show();
		}
	}

	function assignFunctionsToArrowButtons(){
		var previousButton = $("#leftArrow");
		var nextButton = $("#rightArrow");
		previousButton.on("click", function(){ //assign goToPreviousArticle to previous button
			goToPreviousArticle();
		});

		nextButton.on("click", function(){ //assign goToNextArticle to next button
			goToNextArticle();
		});

	}

	init();
});