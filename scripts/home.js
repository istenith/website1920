var images = [
	'resources/images/iste-ocean.jpeg',
	'resources/images/iste-team.jpeg',
	'resources/images/iste-tree.jpeg',
	'resources/images/iste-time.jpeg',
	'resources/images/iste-cat.jpeg'
];

var imgTime = 5000; //transition time for one image
var i = 0;//current image index
var bg = document.querySelectorAll('#slideshow')
function changeBg(){


	//bg[0].classList.remove('visible');
	//bg[1].classList.remove('invisible');
	bg[0].src = images[i];
	bg[1].src = images[i+1];

	bg[0].classList.toggle('visible');
	bg[1].classList.toggle('invisible');
	i++;
	//resetting image index
	if(i + 1 == images.length){i = 0;}

	setTimeout(changeBg, imgTime);

};

changeBg();