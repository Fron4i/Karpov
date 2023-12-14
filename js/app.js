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

//function LottieScrollTrigger1(vars) {
//	let playhead = { frame: 0 },
//		target = gsap.utils.toArray(vars.target)[0],
//		st = {
//			trigger: vars.target,
//			pin: ".lotti-1",
//			start: "top +=255",
//			end: "+=" + vars.ccc,
//			scrub: 2,
//			markers: false,
//		},
//		ctx = gsap.context && gsap.context(),
//		animation = lottie.loadAnimation({
//			container: target,
//			renderer: vars.renderer || "svg",
//			loop: false,
//			autoplay: false,
//			path: vars.path,
//			rendererSettings: vars.rendererSettings || {
//				preserveAspectRatio: "xMidYMid slice",
//			},
//		})
//	gsap.to(vars.target, {
//		autoAlpha: 0,
//		scrollTrigger: {
//			trigger: vars.target,
//			start: `top +-=1500`,
//			end: `+=150`,
//			markers: false,
//			scrub: 2,
//		},
//	})
//	for (let p in vars) {
//		st[p] = vars[p]
//	}

//	animation.addEventListener("DOMLoaded", function () {
//		let createTween = function () {
//			animation.frameTween = gsap.to(playhead, {
//				frame: animation.totalFrames - 1,
//				ease: "none",
//				onUpdate: () => animation.goToAndStop(playhead.frame, true),
//				scrollTrigger: st,
//			})
//			return () => animation.destroy && animation.destroy()
//		}
//		ctx && ctx.add ? ctx.add(createTween) : createTween()
//		ScrollTrigger.sort()
//		ScrollTrigger.refresh()
//	})
//	return animation
//}

//function LottieScrollTrigger2(vars) {
//	let playhead = { frame: 0 },
//		target = gsap.utils.toArray(vars.target)[0],
//		st = {
//			trigger: vars.target,
//			pin: ".left",
//			start: "center center+=100",
//			end: "+=" + (vars.ccc - 50 - 25 / vh) * vh,
//			scrub: true,
//			markers: false,
//		},
//		ctx = gsap.context && gsap.context(),
//		animation = lottie.loadAnimation({
//			container: target,
//			renderer: vars.renderer || "svg",
//			loop: false,
//			autoplay: false,
//			path: vars.path,
//			rendererSettings: vars.rendererSettings || {
//				preserveAspectRatio: "xMidYMid slice",
//			},
//		})

//	//gsap.to(vars.target, {
//	//	autoAlpha: 0.01,
//	//	scrollTrigger: {
//	//		pinnedContainer: vars.target,
//	//		trigger: vars.target,
//	//		start: "top bottom-=" + (vars.ccc - 20) * vh,
//	//		end: "bottom bottom-=" + vars.ccc * vh,
//	//		markers: false,
//	//		scrub: 1,
//	//		//onToggle: (self) => console.log("toggled, isActive:", (vars.ccc - 20) * vh, self.isActive),
//	//		//onUpdate: (self) => {
//	//		//	console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity())
//	//		//},
//	//	},
//	//})

//	for (let p in vars) {
//		// Позвольте пользователям переопределить по умолчанию Scrolltrigger
//		st[p] = vars[p]
//	}

//	animation.addEventListener("DOMLoaded", function () {
//		let createTween = function () {
//			animation.frameTween = gsap.to(playhead, {
//				frame: animation.totalFrames - 1,
//				ease: "none",
//				onUpdate: () => animation.goToAndStop(playhead.frame, true),
//				scrollTrigger: st,
//			})
//			//gsap.from(vars.target, {
//			//	autoAlpha: 0,
//			//	scrollTrigger: {
//			//		trigger: vars.target,
//			//		scrub: 0.5,
//			//		//onToggle: (self) => console.log("toggled, isActive:", self.isActive),
//			//	},
//			//})
//			//gsap.to(vars.target, {
//			//	autoAlpha: 0.99,
//			//	scrollTrigger: {
//			//		trigger: vars.target,
//			//		start: "top bottom-=300",
//			//		end: "bottom bottom+=600",
//			//		markers: false,
//			//		scrub: 1,
//			//		onToggle: (self) => console.log("isActive:", self.isActive),
//			//	},
//			//})

//			return () => animation.destroy && animation.destroy()
//		}
//		ctx && ctx.add ? ctx.add(createTween) : createTween()
//		ScrollTrigger.sort()
//		ScrollTrigger.refresh()
//	})
//	return animation
//}

//LottieScrollTrigger1({
//	target: "#animationWindow1",
//	path: "https://lottie.host/4b86cc83-9c36-4de0-9caa-fc2bf593d313/P5eEWATURk.json",
//	ccc: 2000,
//	scrub: 2,
//})
//LottieScrollTrigger2({
//	target: "#animationWindow2",
//	path: "https://lottie.host/81d9f0ce-d6e8-46b7-a861-4eab86310e60/U0E0rtSX4t.json",
//	ccc: 300,
//	scrub: 2,
//})

// ?

//ScrollTrigger.create({
//	trigger: "#animationWindow3",
//	start: "top top",
//	end: "bottom 50%+=100px",
//	endTrigger: "#otherID",
//	onToggle: (self) => console.log("toggled, isActive:", self.isActive),
//	onUpdate: (self) => {
//	  console.log(
//	    "progress:",
//	    self.progress.toFixed(3),
//	    "direction:",
//	    self.direction,
//	    "velocity",
//	    self.getVelocity()
//	  );
//	},
//})

const animation = lottie.loadAnimation({
	container: document.getElementById("animationWindow3"), // контейнер для анимации
	renderer: "svg", // тип рендерера (может быть 'svg', 'canvas' или 'html')
	loop: true, // зацикливание анимации
	autoplay: false, // автоматический запуск анимации
	path: "https://lottie.host/4b86cc83-9c36-4de0-9caa-fc2bf593d313/P5eEWATURk.json", // путь к вашему JSON-файлу с анимацией
})

//const tl = gsap.timeline({
//	scrollTrigger: {
//		trigger: "#animationWindow3",
//		start: "center-=25 center",
//		end: "+=1000",
//		scrub: 1,
//		pin: true,
//		markers: true,
//	},
//})

const tl1 = gsap.timeline({}).to("#animationWindow3", 1, {
	top: "-200vh",
	ease: Power1.easeInOut,
	scrollTrigger: {
		trigger: "#animationWindow3",
		start: "top top",
		end: "+=500%",
	},
})

const scroll1 = ScrollTrigger.create({
	trigger: "#animationWindow3",
	start: "top top",
	end: "+=500%",
	animation: tl1,
})

//tl.to("#animationWindow3", { yPercent: 350, duration: 1 })
//animation.play()
//tl.from("#animationWindow3", { opacity: 0 })
//tl.to("#animationWindow3", { opacity: 1, duration: 1 })
//tl.to("#animationWindow3", { rotation: 360, duration: 3 })
tl1.to("#animationWindow3", { x: 100, duration: 2 })
//animation.pause()
tl1.to("#animationWindow3", { y: -50, duration: 2 })
tl1.to("#animationWindow3", { opacity: 0, duration: 1 })

// Тогда мы можем легко контролировать все это ...
//tl.resume()
//tl.seek(1.5)
//tl.reverse()

//LottieInteractivity.create({
//	player: "#animationWindow3",
//	mode: "scroll",
//	container: "#MyContainerId",
//	actions: [
//		{
//			visibility: [1, 1],
//			type: "seek",
//			frames: [0, 200],
//		},
//	],
//})

let proxy = LottieProxy({
	container: "#animationWindow",
	path: "https://lottie.host/81d9f0ce-d6e8-46b7-a861-4eab86310e60/U0E0rtSX4t.json",
})

proxy.onLoaded(init)

function init() {
	//let tl2 = gsap.timeline({
	//	scrollTrigger: {
	//		//scroller: ".allsite",
	//		trigger: "#animationWindow",
	//		start: "top top",
	//		end: "300%",
	//		scrub: 1,
	//		pin: true,
	//	},
	//	frame: proxy.lastFrame,
	//})

	//tl2.to(proxy, {
	//	scrollTrigger: {
	//		trigger: "#animationWindow",
	//		start: "center center",
	//		end: "300%",
	//		scrub: 1,
	//		pin: true,
	//	},
	//frame: proxy.lastFrame,
	//})
	let tl2 = gsap
		.timeline({
			scrollTrigger: {
				trigger: "#animationWindow",
				start: "center center",
				end: "1000%",
				markers: true,
				scrub: true,
				pin: true,
			},
			frame: proxy.lastFrame,
		})
		.to(proxy, {
			duration: 150,
			scrollTrigger: {},
			//frame: proxy.lastFrame,
			frame: 30,
		})
		.fromTo(
			proxy,
			{
				duration: 50,
				scrollTrigger: {},
				frame: 30,
			},
			{
				duration: 50,
				scrollTrigger: {},
				frame: 60,
			}
		)
		.fromTo(
			proxy,
			{
				duration: 50,
				scrollTrigger: {},
				frame: 60,
			},
			{
				duration: 50,
				scrollTrigger: {},
				frame: 90,
			}
		)
	//.fromTo(
	//	proxy,
	//	{
	//		scrollTrigger: {
	//			trigger: "#animationWindow",
	//			start: "center center",
	//			end: "1000%",
	//			scrub: 1,
	//			pin: true,
	//		},
	//		frame: 30,
	//	},
	//	{
	//		scrollTrigger: {
	//			trigger: "#animationWindow",
	//			start: "center center",
	//			end: "1000%",
	//			scrub: 1,
	//			pin: true,
	//		},
	//		frame: 50,
	//	}
	//)

	tl2.to("#animationWindow", {
		marginTop: 0,
		opacity: 1,
		duration: 90,
		x: 100,
	}).to("#animationWindow", {
		opacity: 0,
		duration: 50,
	})

	//gsap.timeline({
	//	scrollTrigger: {
	//		trigger: "#animationWindow",
	//		start: "top top",
	//		end: "+=500%",
	//		markers: true,
	//		scrub: 1,
	//		pin: true,
	//	},
	//}).fromTo(
	//	proxy,
	//	{
	//		frame: 0,
	//	},
	//	{
	//		frame: 27,
	//	}
	//)
}

function LottieProxy(options) {
	let animation = lottie.loadAnimation({
		renderer: "svg",
		loop: false,
		autoplay: false,
		...options,
		container: gsap.utils.toArray(options.container)[0],
	})

	let frame = 0
	let onLoad

	let proxy = {
		animation,
		loaded: false,
		get lastFrame() {
			return animation.firstFrame + animation.totalFrames - 1
		},
		get frame() {
			return frame
		},
		set frame(value) {
			frame = value
			this.loaded && animation.goToAndStop(frame, true)
		},
		onLoaded(cb) {
			onLoad = cb
		},
	}

	animation.addEventListener("DOMLoaded", () => {
		proxy.loaded = true
		proxy.frame = frame
		onLoad && onLoad()
	})

	return proxy
}
