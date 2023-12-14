const vw = window.innerWidth / 100
const vh = window.innerHeight / 100

//~ mobil-nav

$(".nav-mobil__li").click(function () {
	if (!$(this).hasClass("upp")) {
		$(".nav-mobil__li").removeClass("upp")
		$(this).toggleClass("upp")
	} else {
		$(".nav-mobil__li").removeClass("upp")
	}
})

let styleYes = document.createElement("style")
styleYes.innerHTML = `
				.nav-mobil {
					opacity: 1;
					transition: transform 600ms ease-out;
					transform: translateX(0px) translateY(0px);
				}
			`

let styleNo = document.createElement("style")
styleNo.innerHTML = `
				.nav-mobil {
					opacity: 1;
					transition: transform 550ms ease-in;
					transform: translateX(-100vw) translateY(0px);
				}
			`

$(document).ready(function () {
	document.head.appendChild(styleNo)
	$(".nav-mobil").removeClass("none")
})

$(".menu-button").click(function () {
	if (!$(".menu-button").hasClass(".open-mobil-button")) {
		$(".menu-button").toggleClass(".open-mobil-button")
		document.head.appendChild(styleYes)
	} else {
		$(".menu-button").toggleClass(".open-mobil-button")
		document.head.appendChild(styleNo)
	}
})

$(".nav-mobil__close-menu-button").click(function () {
	$(".menu-button").toggleClass(".open-mobil-button")
	document.head.appendChild(styleNo)

	$(".nav-mobil__li").removeClass("upp")
})

const heightBody = $("body").outerHeight()

let ss = heightBody + "px"
$(".nav-mobil").css("height", ss)

// ! lotii

function LottieScrollTrigger1(vars) {
	let playhead = { frame: 0 },
		target = gsap.utils.toArray(vars.target)[0],
		st = {
			trigger: vars.target,
			pin: ".lotti-1",
			start: "top +=255",
			end: "+=" + vars.ccc,
			scrub: 2,
			markers: false,
		},
		ctx = gsap.context && gsap.context(),
		animation = lottie.loadAnimation({
			container: target,
			renderer: vars.renderer || "svg",
			loop: false,
			autoplay: false,
			path: vars.path,
			rendererSettings: vars.rendererSettings || {
				preserveAspectRatio: "xMidYMid slice",
			},
		})
	gsap.to(vars.target, {
		autoAlpha: 0,
		scrollTrigger: {
			trigger: vars.target,
			start: `top +-=1500`,
			end: `+=150`,
			markers: false,
			scrub: 2,
		},
	})
	for (let p in vars) {
		st[p] = vars[p]
	}

	animation.addEventListener("DOMLoaded", function () {
		let createTween = function () {
			animation.frameTween = gsap.to(playhead, {
				frame: animation.totalFrames - 1,
				ease: "none",
				onUpdate: () => animation.goToAndStop(playhead.frame, true),
				scrollTrigger: st,
			})
			return () => animation.destroy && animation.destroy()
		}
		ctx && ctx.add ? ctx.add(createTween) : createTween()
		ScrollTrigger.sort()
		ScrollTrigger.refresh()
	})
	return animation
}

function LottieScrollTrigger2(vars) {
	let playhead = { frame: 0 },
		target = gsap.utils.toArray(vars.target)[0],
		st = {
			trigger: vars.target,
			pin: ".left",
			start: "center center+=100",
			end: "+=" + (vars.ccc - 50 - 25 / vh) * vh,
			scrub: 1,
			markers: false,
		},
		ctx = gsap.context && gsap.context(),
		animation = lottie.loadAnimation({
			container: target,
			renderer: vars.renderer || "svg",
			loop: false,
			autoplay: false,
			path: vars.path,
			rendererSettings: vars.rendererSettings || {
				preserveAspectRatio: "xMidYMid slice",
			},
		})

	for (let p in vars) {
		// Позвольте пользователям переопределить по умолчанию Scrolltrigger
		st[p] = vars[p]
	}

	animation.addEventListener("DOMLoaded", function () {
		let createTween = function () {
			animation.frameTween = gsap.to(playhead, {
				frame: animation.totalFrames - 1,
				ease: "none",
				onUpdate: () => animation.goToAndStop(playhead.frame, true),
				scrollTrigger: st,
			})
			gsap.to(vars.target, {
				autoAlpha: 0,
				scrollTrigger: {
					pinnedContainer: vars.target,
					trigger: vars.target,
					start: "top bottom-=" + (vars.ccc - 20) * vh,
					end: "bottom bottom-=" + vars.ccc * vh,
					markers: false,
					scrub: 1,
					//onToggle: (self) => console.log("toggled, isActive:", (vars.ccc - 20) * vh, self.isActive),
					//onUpdate: (self) => {
					//	console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity())
					//},
				},
			})
			gsap.to(vars.target, {
				autoAlpha: 0,
				scrollTrigger: {
					pinnedContainer: vars.target,
					trigger: vars.target,
					start: 10,
					end: 11,
					markers: false,
					scrub: 1,
				},
				//onToggle: (self) => console.log("toggled, isActive:", (vars.ccc - 20) * vh, self.isActive),
			})
			gsap.to(vars.target, {
				autoAlpha: 1,
				scrollTrigger: {
					trigger: vars.target,
					start: `top+=100 center+=300`,
					end: "+=1400",
					markers: false,
					scrub: 1,
					//onToggle: (self) => console.log("toggled, isActive:", self.isActive),
				},
			})
			return () => animation.destroy && animation.destroy()
		}
		ctx && ctx.add ? ctx.add(createTween) : createTween()
		ScrollTrigger.sort()
		ScrollTrigger.refresh()
	})
	return animation
}

LottieScrollTrigger1({
	target: "#animationWindow1",
	path: "https://lottie.host/4b86cc83-9c36-4de0-9caa-fc2bf593d313/P5eEWATURk.json",
	ccc: 2000,
	scrub: 2,
})
LottieScrollTrigger2({
	target: "#animationWindow2",
	path: "https://lottie.host/81d9f0ce-d6e8-46b7-a861-4eab86310e60/U0E0rtSX4t.json",
	ccc: 300,
	scrub: 2,
})

// ?

//const tl = gsap.timeline({
//	scrollTrigger: {
//		trigger: ".trigger",
//		start: "top top",
//		end: "+=1000",
//		scrub: 1,
//		pin: true,
//		markers: true,
//	},
//})
//tl.to(".box", { yPercent: 350, duration: 1 })
//tl.to(".box", { rotation: 360, duration: 3 })
//tl.to(".box", { xPercent: 350, duration: 1 })
