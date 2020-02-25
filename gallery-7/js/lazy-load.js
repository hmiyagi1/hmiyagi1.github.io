const images = document.querySelectorAll("[data-src]");
function preloadImage(img){
	const src = img.getAttribute("data-src");
	if(!src) { return; }
   img.src = src;}
const ImgOptions = {
	  rootMargin: "0px 0px -500px 0px"
};
const ImgObserver = new IntersectionObserver((entries, ImgObserver) => {
	 entries.forEach(entry => {
	   if(!entry.isIntersecting)  {
		return;
	} else{
		preloadImage(entry.target);
		ImgObserver.unobserve(entry.target);
	}
 });
}, ImgOptions);
images.forEach(image => {
	ImgObserver.observe(image);
})
