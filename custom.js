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

// end


// Onload banner Animation
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

// Nav

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

// Welcome

var tl =  gsap.timeline();

tl.from(".welcome h1 span", {
	y: 800,
	stagger: {
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
})


// Event
var tl3 = gsap.timeline({
scrollTrigger:{
	trigger: ".eventsec",
	start: '2% 90%',
	end: '60% 90%',
	// markers:true,
	scrub:-1
}
});


tl3.from(".eventsec",{
	transform:'scale(0.8,0.8)',
	rotate:'3deg',
	ease:"power2.out"
},'a')

tl3.from("#event span",{
	y:50,
	duration:0.2,
	stagger:0.1,
	opacity:0,
},'a')


tl3.from("#cards-1",{
	top:'100px',
	duration:0.6,

},'cardss')

tl3.from("#cards-2",{
	top:'200px',
	duration:0.6,

},'cardss')

tl3.from("#cards-3",{
	top:'400px',
	duration:0.6,
},'cardss')

tl3.from("#cards-4",{
	top:'600px',
	duration:0.6,
},'cardss')



// Drag

// var drags = document.querySelector(".cardbx");

// drags.addEventListener("drag", function(dats){
// 	gsap.to(".cards",{
// 		x:"-10%",
// 	})
// })


// Swip

let drag = document.querySelector(".cardsmain");
let cusor = document.querySelector("#dragms");

drag.addEventListener("mousemove", function(dets){
gsap.to(cusor,{
	x:dets.x,
	y:dets.y,
	duration:0.5,
	ease: "power1.out",
})

});


drag.addEventListener("mouseleave", function(dets){
gsap.to(cusor,{
	opacity:0
})


});


drag.addEventListener("mouseenter", function(dets){
gsap.to(cusor,{
	opacity:1
})


});



// What is flow Animation
var tl4 = gsap.timeline({
	scrollTrigger:{
		trigger:"#whatflow",
		start: '15% 80%',
		end:'30% 10%',
		// markers:true,
		scrub:-1,
	}
});

tl4.from("#bolan",{
	y:200,
	duration:0.2
})


var tl5 = gsap.timeline({
	scrollTrigger:{
		trigger:"#whatflow",
		start:'1% 60%',
		end:'20% 20%',
		markers:true,

	}
})

tl5.from(".whatheadingletter span",{
	y: 180,
	stagger: {
        each: 0.3,
        from: 'start',
    },
	ease: "power2.in",
	duration:0.9,
	opacity:1
})




