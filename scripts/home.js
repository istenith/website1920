var images = [
	'resources/images/iste-day-and-night.jpeg',
	'resources/images/iste-ocean.jpeg',
	'resources/images/iste-tree.jpeg',
	'resources/images/iste-time.jpeg',
	'resources/images/iste-cat.jpeg'
];

var imgTime = 3000; //transition time for one image
var i = 0;//current image index

function changeBg(){
	//setting the initial image
	document.getElementById('slideshow').className += "fadeOut";

	//switching between fadeOut class
	setTimeout(function(){
		document.getElementById('slideshow').src = images[i];
		document.getElementById('slideshow').className = "";
	}, 1000);
	i++;
	//resetting image index
	if(i == images.length){i = 0;}

	setTimeout(changeBg, imgTime);
};

changeBg();