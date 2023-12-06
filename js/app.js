function LottieScrollTrigger(vars) {
	let playhead = { frame: 0 },
		target = gsap.utils.toArray(vars.target)[0],
		speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
		st = {
			trigger: target,
			pin: ".main",
			start: "top top",
			end: speeds[vars.speed],
			scrub: 2,
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
	//gsap.to(".main", {
	//	//autoAlpha: 0,
	//	width: 0,
	//	height: 0,
	//	scrollTrigger: {
	//		trigger: target,
	//		start: speeds[vars.speed],
	//		markers: true,
	//		scrub: true,
	//		end: "+=100",
	//	},
	//})
	//gsap.to(target, {
	//	//autoAlpha: 0,
	//	width: 0,
	//	height: 0,
	//	scrollTrigger: {
	//		trigger: target,
	//		start: speeds[vars.speed],
	//		markers: true,
	//		scrub: true,
	//		end: "+=100",
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
			return () => animation.destroy && animation.destroy()
		}
		ctx && ctx.add ? ctx.add(createTween) : createTween()
		// В случае, если на странице есть какие -либо другие Scrolltriggers, и загрузка этого актива Lottie вызвала изменения макета
		ScrollTrigger.sort()
		ScrollTrigger.refresh()
	})
	return animation
}

LottieScrollTrigger({
	target: "#animationWindow",
	path: "https://lottie.host/f54a273b-7c85-4d02-8de6-30cf22118504/6t6a4QFug4.json",
	speed: "medium",
	scrub: 2,
	// секунды, чтобы Playhead "наверстал упущенность"
	// Вы также можете добавить любые значения ScrollTrigger здесь, например, триггер, запуск, конец, OnEnter, OnLeave, OnuPdate и т. Д. См./Docs/V3/Plugins/Scrolltrigger
})

//gsap.to("header", {
//	autoAlpha: 0,
//	scrollTrigger: {
//		trigger: ".scrollTriggerLogo",
//		start: "top top+=100",
//		markers: true,
//		scrub: true,
//		end: "+=500",
//	},
//})
