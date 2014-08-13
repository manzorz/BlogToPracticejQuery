$(function(){
	var titleOfContents = $(".titleOfContents");

	var textOfContents = $(".textOfContents");

	var oneContainerToRuleThemAll = $("#oneContainerToRuleThemAll");

	var arrayOfTitlesThatFitTheSearch, arrayOfContentsThatFitTheSearch;

	$.each(arrayOfTitles,function(index){
		oneContainerToRuleThemAll.append("<div class='contents'><h1 class='titleOfContents'>"+arrayOfTitles[index]+"</h1><p class='textOfContents'>"+arrayOfContents[index]+"</p></div>");
	});
	
	$("#searchForm").on("keyup", function(){
		$.each(arrayOfTitles, function(index, value){
			console.log();
			console.log($("input:text").val() + ", " + arrayOfTitles[index]);
			console.log($.inArray($("input:text").val(),arrayOfTitles));
		});
	});
	/*
	oneContainerToRuleThemAll.append("<div class='contents'><h1 class='titleOfContents'>"+arrayOfTitles[index]+"</h1><p class='textOfContents'>"+arrayOfContents[index]+"</p></div>");
	});
	*/
	});
	//<div class='contents'><h1 class='titleOfContents'>"+arrayOfTitles[index]+"</h1><p class='textOfContents'>"+arrayOfContents[index]+"</p></div>