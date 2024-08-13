// Lenish
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Animation
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
		start: '3% 1%',
		end: '120% 5%',
		// markers:true,
		scrub: 1
	}
});


tl2.to(".welcome",{

	transform: 'scale(0.8,0.8)',
	rotate:'-3deg',
	ease: "power2.out",
	// top:'220px',
	// transform: 'rotate(-10deg)',
})



var tl3 = gsap.timeline({
scrollTrigger:{
	trigger: ".eventsec",
	start: '2% 95%',
	end: '90% 110%',
	markers:true,
	scrub:-1
}
});


tl3.from(".eventsec",{
	transform:'scale(0.8,0.8)',
	rotate:'3deg',
	ease:"power2.out"
})


tl3.from(".cards-1",{
	top:'100px',
	duration:0.3,

},'cardss')

tl3.from(".cards-2",{
	top:'200px',
	duration:0.3,

},'cardss')

tl3.from(".cards-3",{
	top:'400px',
	duration:0.3,
},'cardss')

tl3.from(".cards-4",{
	top:'600px',
	duration:0.3,
},'cardss')



// Drag

// var drags = document.querySelector(".cardbx");

// drags.addEventListener("drag", function(dats){
// 	gsap.to(".cards",{
// 		x:"-10%",
// 	})
// })







