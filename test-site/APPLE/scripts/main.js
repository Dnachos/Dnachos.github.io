var myImage = document.querySelector('img');

myImage.onclick = function() {
var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/gettyimages-185071735.jpg') {
alert("NOOOOOO!!!!!");
myImage.setAttribute ('src', 'images/httpspreviews.123rf.comimageslucielanglucielang1005lucielang1005001216992772-red-apple-core-isolated-on-a-white-background-Stock-Photo-bitten.jpg');

} else {
myImage.setAttribute ('src','images/gettyimages-185071735.jpg');
}
}