
// this function allows the viewer to see detailed services
function viewDetailedServices(){
	document.getElementById("landingContainer").style.height = "130vh";
	// the button is hidden
	document.getElementById("detailedServicesButton").style.display = "none";
	// the prompt for viewers to click on button
	document.getElementById("buttonPrompt").style.display = "none";
	// the detailed information is visible; the div id is detailedInformation
	document.getElementById("detailedInformation").style.display = "block";
	// display the directional symbol to scroll down
	document.getElementById("servicesGuide").style.display = "block";
};


