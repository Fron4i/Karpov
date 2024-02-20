//let tlll3 = gsap.timeline({
//	scrollTrigger: {
//		trigger: "#animationWindow2",
//		//startTrigger: ".home-hero-logos-overlay",
//		start: "top+=25% bottom",
//		end: "+=200%",
//		markers: false,
//		scrub: 1,
//		//pin: true,
//	},
//})
//tlll3.fromTo(
//	".lotti-1",
//	{
//		//ease: "slow(0.7,0.7,false)",
//		ease: "power1.out",
//		opacity: 1,
//		y: 25,
//		duration: 15,
//	},
//	{
//		//ease: "slow(0.7,0.7,false)",
//		ease: "power1.out",
//		opacity: 0,
//		y: 0,
//		duration: 15,
//	},
//	">+500%"
//)
/////////////////////
//.to(
//	"#animationWindow1",
//	{
//		//ease: "slow(0.7,0.7,false)",
//		//ease: "power1.out",
//		opacity: 0,
//		duration: 10,
//	},
//	">-20%"
//)

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

//let tlll2 = gsap.timeline({
//	scrollTrigger: {
//		trigger: ".home-hero-logos-overlay",
//		//startTrigger: ".home-hero-logos-overlay",
//		start: "top bottom",
//		end: "+=150%",
//		markers: false,
//		scrub: 1,
//		//pin: true,
//	},
//})
//tlll2.from(".lotti-1", {
//	//ease: "slow(0.7,0.7,false)",
//	//ease: "power1.out",
//	opacity: 0,
//	duration: 10,
//})

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
//onUpdate: (self) => {
//	console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity())
//},
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

//const animation = lottie.loadAnimation({
//	container: document.getElementById("animationWindow3"), // контейнер для анимации
//	renderer: "svg", // тип рендерера (может быть 'svg', 'canvas' или 'html')
//	loop: true, // зацикливание анимации
//	autoplay: false, // автоматический запуск анимации
//	path: "https://lottie.host/4b86cc83-9c36-4de0-9caa-fc2bf593d313/P5eEWATURk.json", // путь к вашему JSON-файлу с анимацией
//})

////const tl = gsap.timeline({
////	scrollTrigger: {
////		trigger: "#animationWindow3",
////		start: "center-=25 center",
////		end: "+=1000",
////		scrub: 1,
////		pin: true,
////		markers: true,
////	},
////})

//const tl1 = gsap.timeline({}).to("#animationWindow3", 1, {
//	top: "-200vh",
//	ease: Power1.easeInOut,
//	scrollTrigger: {
//		trigger: "#animationWindow3",
//		start: "top top",
//		end: "+=500%",
//	},
//})

//const scroll1 = ScrollTrigger.create({
//	trigger: "#animationWindow3",
//	start: "top top",
//	end: "+=500%",
//	animation: tl1,
//})

////tl.to("#animationWindow3", { yPercent: 350, duration: 1 })
////animation.play()
////tl.from("#animationWindow3", { opacity: 0 })
////tl.to("#animationWindow3", { opacity: 1, duration: 1 })
////tl.to("#animationWindow3", { rotation: 360, duration: 3 })
//tl1.to("#animationWindow3", { x: 100, duration: 2 })
////animation.pause()
//tl1.to("#animationWindow3", { y: -50, duration: 2 })
//tl1.to("#animationWindow3", { opacity: 0, duration: 1 })

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

let txt2 = "span.two",
	txt3 = "span.three",
	txt4 = "span.four",
	img2 = "img.two",
	img3 = "img.three",
	img4 = "img.four"

gsap.timeline({
	defaults: {
		duration: 300,
	},
	scrollTrigger: {
		trigger: ".wrap_2",
		scrub: !0,
		start: "+=1",
		end: "+=3000",
		pin: !0,
	},
})
	.to(".wrap_2 span.one", { opacity: 0, delay: 600 })
	.to(".wrap_2 img.one", { opacity: 0, y: -20 }, "<")
	.from(txt2, { opacity: 0 })
	.from(img2, { opacity: 0, y: 20 }, "<")
	.to(txt2, { opacity: 0, delay: 600 })
	.to(img2, { opacity: 0, y: -20 }, "<")
	.from(txt3, { opacity: 0 })
	.from(img3, { opacity: 0, y: 20 }, "<")
	.to(txt3, { opacity: 0, delay: 600 })
	.to(img3, { opacity: 0, y: -20 }, "<")
	.from(txt4, { opacity: 0 })
	.from(img4, { opacity: 0, y: 20 }, "<")
	.to(txt4, { opacity: 1, duration: 600 })
	.to(img4, { opacity: 1, y: -20 }, "<")
