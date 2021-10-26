const scrollContainer = document.querySelector(".scroll-container");
const scrollImg = document.querySelector(".scroll-img");
let scrollHeight = 0
const containerHeight = scrollContainer.offsetHeight

window.addEventListener("scroll", () => {
	scrollHeight = window.scrollY
	let scrollRate = parseInt(scrollHeight/containerHeight*100)
	console.log(scrollRate)
	scrollImg.style.backgroundImage = `url(./video/img_${scrollRate}.jpg)`;
})

window.addEventListener("load", () => {
	let img = new Image();
	let imgArray = []
	for(let i=0; i<160; i++) {
		imgArray.push(`./video/img_${i}.jpg`)
	}
	preloading(imgArray)
})
function preloading (imageArray) { 
	let n = imageArray.length; 
	for (let i = 0; i < n; i++) { 
		let img = new Image(); img.src = imageArray[i]; 
	} 
} 

