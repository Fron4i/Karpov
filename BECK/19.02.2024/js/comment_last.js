// ! lotii TTttttttttttttttttttttttttttttttttttttttttttt

function LottieScrollTrigger2(vars) {
	let playhead = { frame: 0 },
		target = gsap.utils.toArray(vars.target)[0],
		st = {
			trigger: vars.target,
			pin: ".left",
			start: "center center+=100",
			end: "+=" + (vars.ccc - 50 - 25 / vh) * vh,
			scrub: true,
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

	//gsap.to(vars.target, {
	//	autoAlpha: 0.01,
	//	scrollTrigger: {
	//		pinnedContainer: vars.target,
	//		trigger: vars.target,
	//		start: "top bottom-=" + (vars.ccc - 20) * vh,
	//		end: "bottom bottom-=" + vars.ccc * vh,
	//		markers: false,
	//		scrub: 1,
	//		//onToggle: (self) => console.log("toggled, isActive:", (vars.ccc - 20) * vh, self.isActive),
	//		//onUpdate: (self) => {
	//		//	console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity())
	//		//},
	//	},
	//})

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
			//gsap.from(vars.target, {
			//	autoAlpha: 0,
			//	scrollTrigger: {
			//		trigger: vars.target,
			//		scrub: 0.5,
			//		//onToggle: (self) => console.log("toggled, isActive:", self.isActive),
			//	},
			//})
			//gsap.to(vars.target, {
			//	autoAlpha: 0.99,
			//	scrollTrigger: {
			//		trigger: vars.target,
			//		start: "top bottom-=300",
			//		end: "bottom bottom+=600",
			//		markers: false,
			//		scrub: 1,
			//		onToggle: (self) => console.log("isActive:", self.isActive),
			//	},
			//})

			return () => animation.destroy && animation.destroy()
		}
		ctx && ctx.add ? ctx.add(createTween) : createTween()
		ScrollTrigger.sort()
		ScrollTrigger.refresh()
	})
	return animation
}

//LottieScrollTrigger2({
//	target: "#animationWindow2",
//	path: "./../img/c2.json",
//})

ScrollTrigger.create({
	trigger: ".right",
	start: "top center",
	end: "bottom bottom",
	pin: ".left",
})

// ! lotii TTttttttttttttttttttttttttttttttttttttttttttt

let proxy1 = LottieProxy1({
	container: "#animationWindow1",
	path: "./../img/c1.json",
})
let proxy2 = LottieProxy2({
	container: "#animationWindow2",
	path: "./../img/c2.json",
})

proxy1.onLoaded(init1)
//proxy2.onLoaded(init2)

function init1() {
	let tlll = gsap
		.timeline({
			scrollTrigger: {
				trigger: ".home-hero-logos-overlay",
				//startTrigger: ".home-hero-logos-overlay",
				start: "top bottom",
				end: "+=150%",
				markers: false,
				scrub: 1,
				//pin: true,
			},
		})
		.to(".lotti-1", {
			scrollTrigger: {
				trigger: ".home-hero-logos-overlay",
				//startTrigger: ".home-hero-logos-overlay",
				start: "top-=500% bottom",
				end: "+=75%",
				markers: false,
				scrub: 1,
				//pin: true,
			},
			//ease: "slow(0.7,0.7,false)",
			ease: "power1.in",
			opacity: 0.05,
			y: -25,
			duration: 0,
		})
		.to(".lotti-1", {
			//ease: "slow(0.7,0.7,false)",
			ease: "none",
			opacity: 1,
			y: 25,
			duration: 3,
		})

	let lotti1 = gsap
		.timeline({
			scrollTrigger: {
				trigger: ".lotti-1",
				start: "center center",
				end: "+=600%",
				markers: true,
				scrub: 0.5,
				pin: true,
			},
			frame: proxy1.lastFrame,
		})
		//.to(proxy1, {
		//	duration: 100,
		//	scrollTrigger: {},
		//	frame: 30,
		//})
		.fromTo(
			proxy1,
			{
				duration: 50,
				scrollTrigger: {},
				frame: 0,
			},
			{
				duration: 35,
				scrollTrigger: {},
				frame: 25,
			}
			//">-15%"
		)
		.fromTo(
			proxy1,
			{
				duration: 35,
				scrollTrigger: {},
				frame: 25,
			},
			{
				duration: 50,
				scrollTrigger: {},
				frame: 49,
			},
			">-11%"
		)
	tlll.to(".lotti-1", {
		scrollTrigger: {
			//startTrigger: ".home-hero-logos-overlay",
			start: "top-=500% bottom",
			end: "+=75%",
			markers: false,
			scrub: 1,
			//pin: true,
		},
		//ease: "slow(0.7,0.7,false)",
		ease: "power1.in",
		opacity: 0.05,
		y: -25,
		duration: 0,
	}).to(".lotti-1", {
		//ease: "slow(0.7,0.7,false)",
		ease: "none",
		opacity: 1,
		y: 25,
		duration: 3,
	})
}
function init2() {
	let tlll = gsap
		.timeline({
			scrollTrigger: {
				trigger: ".home-hero-logos-overlay",
				//startTrigger: ".home-hero-logos-overlay",
				start: "top bottom",
				end: "+=150%",
				markers: false,
				scrub: 1,
				//pin: true,
			},
		})
		.to(".lotti-1", {
			scrollTrigger: {
				trigger: ".home-hero-logos-overlay",
				//startTrigger: ".home-hero-logos-overlay",
				start: "top-=500% bottom",
				end: "+=75%",
				markers: false,
				scrub: 1,
				//pin: true,
			},
			//ease: "slow(0.7,0.7,false)",
			ease: "power1.in",
			opacity: 0.05,
			y: -25,
			duration: 0,
		})
		.to(".lotti-1", {
			//ease: "slow(0.7,0.7,false)",
			ease: "none",
			opacity: 1,
			y: 25,
			duration: 3,
		})

	let lotti1 = gsap
		.timeline({
			scrollTrigger: {
				trigger: ".lotti-1",
				start: "center center",
				end: "+=600%",
				markers: true,
				scrub: 0.5,
				pin: true,
			},
			frame: proxy1.lastFrame,
		})
		//.to(proxy1, {
		//	duration: 100,
		//	scrollTrigger: {},
		//	frame: 30,
		//})
		.fromTo(
			proxy1,
			{
				duration: 50,
				scrollTrigger: {},
				frame: 0,
			},
			{
				duration: 35,
				scrollTrigger: {},
				frame: 25,
			}
			//">-15%"
		)
		.fromTo(
			proxy1,
			{
				duration: 35,
				scrollTrigger: {},
				frame: 25,
			},
			{
				duration: 50,
				scrollTrigger: {},
				frame: 49,
			},
			">-11%"
		)
	tlll.to(".lotti-1", {
		scrollTrigger: {
			//startTrigger: ".home-hero-logos-overlay",
			start: "top-=500% bottom",
			end: "+=75%",
			markers: false,
			scrub: 1,
			//pin: true,
		},
		//ease: "slow(0.7,0.7,false)",
		ease: "power1.in",
		opacity: 0.05,
		y: -25,
		duration: 0,
	}).to(".lotti-1", {
		//ease: "slow(0.7,0.7,false)",
		ease: "none",
		opacity: 1,
		y: 25,
		duration: 3,
	})
}

function LottieProxy1(options) {
	let animation = lottie.loadAnimation({
		renderer: "svg",
		loop: false,
		autoplay: false,
		...options,
		container: gsap.utils.toArray(options.container)[0],
	})

	let frame = 0
	let onLoad

	let proxy1 = {
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
		proxy1.loaded = true
		proxy1.frame = frame
		onLoad && onLoad()
	})

	return proxy1
}

function LottieProxy2(options) {
	let animation = lottie.loadAnimation({
		renderer: "svg",
		loop: false,
		autoplay: false,
		...options,
		container: gsap.utils.toArray(options.container)[0],
	})

	let frame = 0
	let onLoad

	let proxy2 = {
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
		proxy2.loaded = true
		proxy2.frame = frame
		onLoad && onLoad()
	})

	return proxy2
}
