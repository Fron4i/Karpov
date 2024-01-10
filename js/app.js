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

//!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

AOS.init({
	duration: 1200,
	once: true,
})

//?fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

document.addEventListener("DOMContentLoaded", function () {
	var windowHeight = window.innerHeight || document.documentElement.clientHeight

	// Calculate one vh in pixels
	var vh = windowHeight / 100

	//let top_bot = document.documentElement.clientHeight / 2 - 33.5 * vh + `px`
	let top_bot = `36%`

	var mediaQuery1150 = window.matchMedia("(max-width: 1150px)")
	var mediaQuery900 = window.matchMedia("(max-width: 900px)")
	var mediaQuery605 = window.matchMedia("(max-width: 605px)")
	var mediaQuery400 = window.matchMedia("(max-width: 400px)")

	function handleMediaQueryChange1150(mediaQuery) {
		if (mediaQuery.matches) {
			var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
			// Set the width of the element
			var element = document.querySelector(".lotti-1")
			element.style.width = screenWidth - 30 + "px"
			// Получить среднюю позицию документа
			top_bot = document.documentElement.clientHeight / 2 - 5 * vh + `px`
		}
	}

	function handleMediaQueryChange900(mediaQuery) {
		if (mediaQuery.matches) {
			top_bot = document.documentElement.clientHeight / 2 - 12 * vh + `px`
			var element = document.querySelector("#animationWindow1")
			element.style.setProperty("width", "clamp(250px, 85vw, 830px)")
		}
	}
	function handleMediaQueryChange605(mediaQuery) {
		if (mediaQuery.matches) {
			top_bot = document.documentElement.clientHeight / 2 - 10 * vh + `px`
			//element.style.transform = "translateY(-50%)"
		}
	}

	function handleMediaQueryChange400(mediaQuery) {
		if (mediaQuery.matches) {
			top_bot = document.documentElement.clientHeight / 2 - 2 * vh + `px`
		}
	}
	handleMediaQueryChange1150(mediaQuery1150)
	handleMediaQueryChange900(mediaQuery900)
	handleMediaQueryChange605(mediaQuery605)
	handleMediaQueryChange400(mediaQuery400)

	console.log(top_bot)

	let heightScroll1 = 150
	let heightScroll2 = 55
	let heightScroll3 = 80

	//~fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

	function LottieScrollTrigger1(vars) {
		let playhead = { frame: 0 },
			target = gsap.utils.toArray(vars.target)[0],
			st = {
				trigger: vars.target,
				pin: ".lotti-1",
				//start: `top +=${document.querySelector(".home-hero-logos-overlay").offsetHeight * 4.5}`,
				start: `top +=${top_bot}`,
				//onUpdate: () => {
				//	var element = document.querySelector(".lotti-1")
				//	var topValue = element.offsetTop
				//	console.log(topValue)
				//},
				end: `+=${heightScroll1 * vh}`,
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
		//gsap.to(vars.target, {
		//	autoAlpha: 0,
		//	ease: "sine.out",
		//	scrollTrigger: {
		//		trigger: vars.target,
		//		start: `top +=${heightScroll1 * vh}`,
		//		end: `+=5%`,
		//		markers: false,
		//		scrub: 0.5,
		//	},
		//})
		//gsap.to(vars.target, {
		//	autoAlpha: 1,
		//	ease: "power1.out",
		//	scrollTrigger: {
		//		trigger: vars.target,
		//		start: `top +=97%`,
		//		end: `+=200%`,
		//		markers: false,
		//		scrub: 0.5,
		//	},
		//})
		gsap.fromTo(
			".lotti-1",
			{
				autoAlpha: 1,
				ease: "sine.out",
				scrollTrigger: {
					trigger: vars.target,
					start: `top +=-${heightScroll2}%`,
					end: `+=50%`,
					markers: false,
					scrub: 0,
				},
			},
			{
				autoAlpha: 0,
				ease: "sine.out",
				scrollTrigger: {
					trigger: vars.target,
					start: `top +=-${heightScroll3}%`,
					end: `+=50%`,
					markers: false,
					scrub: 0,
				},
			}
		)

		for (let p in vars) {
			st[p] = vars[p]
		}

		animation.addEventListener("DOMLoaded", function () {
			let createTween = function () {
				animation.frameTween = gsap.to(playhead, {
					frame: animation.totalFrames - 1,
					ease: "none",
					onUpdate: () => {
						document.querySelector(".lotti-1").classList.remove("element"), animation.goToAndStop(playhead.frame, true)
					},
					onComplete: () => {
						document.querySelector(".lotti-1").classList.add("element")
					},
					//onStart: () => {
					//	const element = document.querySelector(".lotti-1")
					//	element.classList.remove("element")
					//},
					//onReverseComplete: () => {
					//	const element = document.querySelector(".lotti-1")
					//	element.classList.remove("element")
					//},
					//onRepeat: () => {
					//	const element = document.querySelector(".lotti-1")
					//	element.classList.remove("element")
					//},
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

	LottieScrollTrigger1({
		target: "#animationWindow1",
		path: "https://lottie.host/669b733a-6fcc-4124-af4c-e3bfb80ec140/GCEwMiKHwr.json",
	})

	// Code to be executed after a delay of 1 second
	//!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
	setTimeout(function () {
		let proxy2 = LottieProxy2({
			container: "#animationWindow2",
			path: "https://lottie.host/3a97c202-a238-4475-b7bc-2909b7eccc03/E4lszbuXP5.json",
		})

		proxy2.onLoaded(init2)

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

		function init2() {
			//gsap.to(".wrap", {
			//	autoAlpha: 0,
			//	ease: "sine.out",
			//	scrollTrigger: {
			//		trigger: "#animationWindow2",
			//		start: `top +=500%`,
			//		end: `+=5%`,
			//		markers: false,
			//		scrub: 0.5,
			//	},
			//})
			//gsap.to(".wrap", {
			//	autoAlpha: 1,
			//	ease: "power1.out",
			//	scrollTrigger: {
			//		trigger: ".lotti-2",
			//		start: `top +=75%`,
			//		end: `+=160%`,
			//		markers: false,
			//		scrub: 0.5,
			//	},
			//})
			//88888
			gsap.set(".wrap", { autoAlpha: 0.01 })

			gsap.to(".wrap", {
				autoAlpha: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: ".lotti-2",
					start: `top +=70%`,
					end: `+=40%`,
					markers: false,
					scrub: 0.5,
				},
			})

			gsap.to(".right", {
				scrollTrigger: {
					trigger: ".lotti-2",
					start: `top +=19%`,
					end: `+=${document.querySelector(".item").offsetHeight - document.querySelector(".ppppp").offsetHeight * 1.67}`,
					markers: false,
					scrub: 0.5,
					pin: ".itiem-1",
				},
			})

			let lotti2 = gsap
				.timeline({
					scrollTrigger: {
						trigger: "#animationWindow2",
						pin: ".left",
						start: "center center+=10%",
						end: () => `+=${document.querySelector(".right").offsetHeight - document.querySelector("#animationWindow2").offsetHeight}`,
						scrub: 0.75,
					},
					frame: proxy2.lastFrame,
				})
				.set(proxy2, {
					frame: 0,
				})
				.to(proxy2, {
					duration: 0.15,
					frame: 12,
				})
				.to(proxy2, {
					duration: 0.3,
					frame: 12,
				})
				.to(proxy2, {
					duration: 0.15,
					frame: 24,
				})
				.to(proxy2, {
					duration: 0.3,
					frame: 24,
				})
				.to(proxy2, {
					duration: 0.15,
					frame: 36,
				})
				.to(proxy2, {
					duration: 0.3,
					frame: 36,
				})
				.to(proxy2, {
					duration: 0.15,
					frame: 48,
				})
				.to(proxy2, {
					duration: 0.3,
					frame: 48,
				})
		}

		//!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

		const elements = document.getElementsByClassName("pin-spacer")

		//console.log(elements[0])

		if (elements.length > 0) {
			elements[0].classList.add("first-and-only")
		}

		//!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
	}, 1300)
})

//function LottieScrollTrigger2(vars) {
//	let playhead = { frame: 0 },
//		target = gsap.utils.toArray(vars.target)[0],
//		st = {
//			trigger: vars.target,
//			pin: ".left",
//			start: "center center+=10%",
//			end: () =>
//				`+=${
//					document.querySelector(".right").offsetHeight -
//					document.querySelector("#animationWindow2").offsetHeight +
//					document.querySelector("#animationWindow2").offsetHeight * 0.2
//				}`,
//			scrub: 0.1,
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

//	gsap.to(".wrap", {
//		autoAlpha: 0,
//		ease: "sine.out",
//		scrollTrigger: {
//			trigger: vars.target,
//			start: `top +=500%`,
//			end: `+=5%`,
//			markers: false,
//			scrub: 0.5,
//		},
//	})

//	gsap.to(".wrap", {
//		autoAlpha: 1,
//		ease: "power1.out",
//		scrollTrigger: {
//			trigger: ".lotti-2",
//			start: `top +=75%`,
//			end: `+=160%`,
//			markers: false,
//			scrub: 0.5,
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

//LottieScrollTrigger2({
//	target: "#animationWindow2",
//	path: "https://lottie.host/3a97c202-a238-4475-b7bc-2909b7eccc03/E4lszbuXP5.json",
//})
