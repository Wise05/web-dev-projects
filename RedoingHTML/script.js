// sizing header to fit when the screen shrinks
const body = document.querySelector('body');
const header = document.querySelector('h1');

function sizeHeader() {
    let bodyWidth = body.offsetWidth;
    let headerFontSize = Math.floor(bodyWidth * 0.063);

    header.style.fontSize = `${headerFontSize}px`;
}

sizeHeader();

window.addEventListener('resize', sizeHeader);

// flipping through slide show
const slide = document.getElementById('slide');
const slideshowCap = document.getElementById('slideCaption')
const images = ["img/PXL_20230819_173507828.MP.jpg",
                 "img/PXL_20230830_190654822 (1).jpg", 
                "img/PXL_20230917_004542993.jpg", 
                "img/PXL_20230919_205310274.jpg"
];
const headers = ["Giant Gnome", "Club Fest", "Work", "Career Fair"];
const captions = [
    "This is an image of the giant wooden gnome that I got to see in Rieman gardens. This was during the Destination Iowa State event which was meant to bring together new freshmen. The gnome is supposedly the world's largest wooden gnome.",
    "This is a photo that I had to take for my software orientation class. The assignment was to go to the club festival and take a photo. I didn't join the baking club, but I did talk to many of the clubs related to tech. In the end I joined the CSE club and the running club.",
    "This is a picture of my coworker. I worked at the dining hall this semester and this is when I had to work in the dish room. This is a photo of my coworker's creation. A snowman made out of cheesy potatoes with other random food to make up its facial features. In the dishroom we have to throw away a lot of food waste, so my coworker decided to have some last minute fun with the cheesy potatoes before throughing it away. He is holding the bucket on top of it to protect it from people who wanted to through his creation away. This was a regular occurance when I worked this shift.",
    "This next photo is me at the career fair. Similar to the club festival picture, I was required to take this photo for my software orientation class. I talked to three employers, each of which were not really interested in a freshman who was just starting out his college career and didn't even have a college GPA yet."
];
const bufferTime = 5000;
let i = 0;

function switchSlide() {
    if (i !== 3) {
        i++;
    } else {
        i = 0;
    }
    slide.src = images[i];
    slideshowCap.innerHTML = `
    <h2 id="slideTitle">${headers[i]}</h2>
    <p>${captions[i]}</p>`;
}

const slideshow = document.getElementById('slideshow');
function transition() {
    slideshow.classList.toggle("hidden");
}

setInterval(switchSlide, bufferTime);