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

function LottieScrollTrigger1(vars) {
	let playhead = { frame: 0 },
		target = gsap.utils.toArray(vars.target)[0],
		st = {
			trigger: vars.target,
			pin: ".lotti-1",
			start: "top +=36%",
			end: "+=300%",
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
	gsap.to(".lotti-1", {
		autoAlpha: 0,
		ease: "sine.out",
		scrollTrigger: {
			trigger: vars.target,
			start: `top +=300%`,
			end: `+=5%`,
			markers: false,
			scrub: 0.5,
		},
	})
	gsap.to(".lotti-1", {
		autoAlpha: 1,
		ease: "power1.out",
		scrollTrigger: {
			trigger: ".lotti-1",
			start: `top +=97%`,
			end: `+=200%`,
			markers: false,
			scrub: 0.5,
		},
	})
	gsap.fromTo(
		".lotti-1",
		{
			autoAlpha: 1,
			ease: "sine.out",
			scrollTrigger: {
				trigger: vars.target,
				start: `top +=-100%`,
				end: `+=150%`,
				markers: false,
				scrub: 0.5,
			},
		},
		{
			autoAlpha: 0,
			ease: "sine.out",
			scrollTrigger: {
				trigger: vars.target,
				start: `top +=-200%`,
				end: `+=150%`,
				markers: false,
				scrub: 0.5,
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
			start: "center center+=10%",
			end: () =>
				`+=${
					document.querySelector(".right").offsetHeight -
					document.querySelector("#animationWindow2").offsetHeight +
					document.querySelector("#animationWindow2").offsetHeight * 0.2
				}`,
			scrub: 0.1,
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

	gsap.to(".wrap", {
		autoAlpha: 0,
		ease: "sine.out",
		scrollTrigger: {
			trigger: vars.target,
			start: `top +=500%`,
			end: `+=5%`,
			markers: false,
			scrub: 0.5,
		},
	})

	gsap.to(".wrap", {
		autoAlpha: 1,
		ease: "power1.out",
		scrollTrigger: {
			trigger: ".lotti-2",
			start: `top +=75%`,
			end: `+=160%`,
			markers: false,
			scrub: 0.5,
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

LottieScrollTrigger1({
	target: "#animationWindow1",
	path: "https://lottie.host/669b733a-6fcc-4124-af4c-e3bfb80ec140/GCEwMiKHwr.json",
})

LottieScrollTrigger2({
	target: "#animationWindow2",
	path: "https://lottie.host/3a97c202-a238-4475-b7bc-2909b7eccc03/E4lszbuXP5.json",
})
