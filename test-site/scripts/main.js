let myImage;
let ticButton;

document.addEventListener("DOMContentLoaded", () => {
	myImage = document.getElementById("myImage");
	myImage.addEventListener("click", imageClicked);
	ticButton = document.getElementById("ticButton");
	ticButton.addEventListener("click", () => {
		open("tictactoe.html", "TICTACTOE");
	});
});

const imageClicked = () => {
	if (myImage.src.includes("images/apple.jpg")) {
		alert("NOOOOOO!!!!!");
		myImage.src = "images/appleCore.jpg";
	} else {
		myImage.src = "images/apple.jpg";
	}
};
