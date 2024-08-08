
gsap.to(".colorbox-1", {
	top:"-100%",
	delay:0.1,
});

gsap.to(".colorbox-2", {
	top:"-100%",
	delay:0.4,
})


gsap.to(".colorbox-3", {
	top:"-100%",
	delay:0.7,
})



var naviToggle = document.querySelector(".navToggle")

var naviClose = document.querySelector(".navClose")




naviToggle.addEventListener("click", function(){
	naviToggle.style.opacity = "0";
	naviClose.style.opacity = "1";
	naviClose.style.visibility = "visible";
	gsap.to(".menu", {
		top:"20px",
		ease: "back.out(1.7)",
	})
})


naviClose.addEventListener("click", function(){
	naviClose.style.opacity = "0";
	naviClose.style.visibility = "hidden";
	naviToggle.style.opacity = "1";
	gsap.to(".menu", {
		top: "-353px",
		ease: "back.out(1.7)",
	})	
})



var tl =  gsap.timeline();

tl.from(".welcome h1 span", {
	y: 800,
	stagger: {
        // wrap advanced options in an object
        each: 0.3,
        from: 'start',
        grid: 'auto',
        ease: "power2.out",
    },
	ease: "power2.out",
	duration:0.9
});





var tl2 =  gsap.timeline({
	scrollTrigger:{
		trigger: ".welcome",
		start: '5% top',
		end: 'bottom 10%',
		markers:true,
		scrub: 1
	}
});


tl2.to(".welcome",{
	duration:2.5,
	 transform: "skewX(20deg)",
	height: '80vh',
	// rotateX: 10,
	ease: "power2.out",
})
















