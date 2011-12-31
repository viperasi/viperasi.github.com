var showInterval; 
var INPUTBARTEXT = "viperasi.github.com $";
$(function(){
	$(document).keypress(function(e){
		if(e.which == 13){
			console.log(e.which);
			enterPressed();
		}
		var inputbarText = $("#inputbar").html();
		var inputText = String.fromCharCode(e.which);
		if(inputbarText.indexOf("<span")!=-1){
			inputbarText = inputbarText.substring(0,inputbarText.indexOf("<span"));
			$("#inputbar span").before(inputText);
		}else{
			$("#inputbar").append(inputText);	
		}
	});
	showInterval = setInterval("showInputCursor()",500);
});

function mainScrollBottom(){
	// $("#main")
}

function enterPressed(){
	var inputbarText = $("#inputbar").html();
	var spanIndex = inputbarText.indexOf("<span");
	var inputText;
	if(spanIndex!=-1){
		inputText = inputbarText.substring(inputbarText.indexOf("$")+1,spanIndex);
	}else{
		inputText = inputbarText.substring(inputbarText.indexOf("$")+1); 
	}
	$("#main").append("<p>"+inputText+"</p>");
	$("#inputbar").empty().append(INPUTBARTEXT);
}

function showInputCursor(){
	$("#inputbar").append("<span class='inputcursor'>&nbsp;</span>");
	clearInterval(showInterval);
	setTimeout(hideInputCursor,500);
}

function hideInputCursor(){
	$("#inputbar span").remove();
	showInterval = setInterval("showInputCursor()",1000);
}