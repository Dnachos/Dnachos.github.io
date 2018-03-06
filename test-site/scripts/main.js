let myImage;
let ticButton;
let domLoaded = false;
let fontLoaded = false;
let font = new FontFace("Crayon", "url(fonts/crayonFont.ttf)");
document.fonts.add(font);
font.load().then(() => {
	fontLoaded = true;
	if (domLoaded) {
		begin();
	}
});

document.addEventListener("DOMContentLoaded", () => {
	domLoaded = true;
	if (fontLoaded) {
		begin();
	}
	myImage = document.getElementById("myImage");
	myImage.addEventListener("click", imageClicked);
	ticButton = document.getElementById("ticButton");
	ticButton.addEventListener("click", () => {
		open("tictactoe.html", "TICTACTOE");
	});
});

const imageClicked = () => {
	if (myImage.src.includes("images/apple.jpg")) {
		alert("*crunch*");
		myImage.src = "images/appleCore.jpg";
	} else {
		myImage.src = "images/apple.jpg";
	}
};
