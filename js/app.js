let windowHeight = window.innerHeight || document.documentElement.clientHeight

// Calculate one vh in pixels
let vh = windowHeight / 100
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
	document.body.style.overflow = "hidden"
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
	document.body.style.overflow = "scroll"
	$(".nav-mobil__li").removeClass("upp")
})

const heightBody = $("body").outerHeight()

let ss = heightBody + "px"
$(".nav-mobil").css("height", ss)

//!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

AOS.init({
	duration: 1350,
	once: true,
})

function isElementInViewport(element) {
	let rect = element.getBoundingClientRect()
	let windowHeight = window.innerHeight || document.documentElement.clientHeight
	let windowWidth = window.innerWidth || document.documentElement.clientWidth
	let elementHeight = rect.height || element.offsetHeight
	let elementWidth = rect.width || element.offsetWidth
	let elementTop = rect.top
	let elementLeft = rect.left

	return (
		elementTop + elementHeight / 2 >= 0 &&
		elementLeft + elementWidth / 2 >= 0 &&
		elementTop + elementHeight / 2 <= windowHeight &&
		elementLeft + elementWidth / 2 <= windowWidth
	)
}

function animateOnScroll() {
	let elements = document.querySelectorAll(
		".animate-on-scroll-1, .animate-on-scroll-2, .animate-on-scroll-3, .animate-on-scroll-4, .animate-on-scroll-5, .animate-on-scroll--left, .animate-on-scroll--right-1, .animate-on-scroll--right-2, .animate-on-scroll--right-3, .animate-on-scroll--right-4, .animate-on-scroll--right-5"
	)
	for (let i = 0; i < elements.length; i++) {
		if (isElementInViewport(elements[i])) {
			elements[i].classList.add("show")
		}
	}
}

window.addEventListener("scroll", animateOnScroll)
window.addEventListener("load", animateOnScroll)

//?fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

//let scrollLength = `${90 * vh}px`
let scrollLength = `${90 * vh}`

function smoothScroll(event) {
	event.preventDefault()

	const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail))
	//console.log(scrollLength)

	const scrollAmount = scrollLength // Настройте количество пикселей, которое нужно прокрутить
	const duration = 500 // Настройте время прокрутки по необходимости

	const startPosition = window.pageYOffset
	const targetPosition = startPosition - delta * scrollAmount

	const startTime = performance.now()
	function animationStep(timestamp) {
		const currentTime = timestamp - startTime
		const progress = Math.min(currentTime / duration, 1)

		const easing = ease(progress)
		const currentPosition = startPosition + (targetPosition - startPosition) * easing

		window.scrollTo({
			top: currentPosition,
			behavior: "auto",
		})

		if (currentTime < duration) {
			requestAnimationFrame(animationStep)
		}
	}

	requestAnimationFrame(animationStep)
}

function ease(progress) {
	return 0.5 - 0.5 * Math.cos(progress * Math.PI * 0.65)
}

//* Создаем новый экземпляр Intersection Observer
function areElementsVisible() {
	const elements = document.querySelectorAll(".lotti-1, .lotti-2")

	for (let i = 0; i < elements.length; i++) {
		const element = elements[i]
		const rect = element.getBoundingClientRect()
		const viewportHeight = window.innerHeight
		const elementHeight = element.clientHeight
		const visibleThreshold = elementHeight * 0.75

		if (rect.top < viewportHeight - visibleThreshold && rect.bottom >= visibleThreshold) {
			return true
		}
	}

	return false
}

//? Создаем новый экземпляр Intersection Observer

////////*
setInterval(() => {
	const element1 = document.querySelector(".lotti-1")
	const element2 = document.querySelector(".lotti-2")

	if (isElementVisible(element1)) {
		scrollLength = `${document.querySelector(".con").offsetHeight / 2.6}`
		window.addEventListener("wheel", smoothScroll, { passive: false })
		window.addEventListener("touchmove", smoothScroll, { passive: false })

		//console.log("111")
	} else if (!isElementVisible(element1) && isElementVisible(element2)) {
		let elem1 = document.querySelector(".item:nth-child(2)").offsetHeight
		let elem2 = document.querySelector(".item:nth-child(3)").offsetTop
		let elem3 = document.querySelector(".item:nth-child(4)").offsetTop

		let distance =
			elem1 * 2 -
			(document.querySelector(".right").offsetHeight -
				document.querySelector(".item:nth-child(2)").offsetHeight * 3 -
				document.querySelector(".item:first-child").offsetHeight) /
				3

		let distance2 = document.querySelector(".item:first-child").offsetHeight - document.querySelector("#anchor1").offsetHeight / 3
		console.log(distance2, elem1 * 2, document.querySelector("#anchor1").offsetHeight / 3)

		scrollLength = `${distance2}`
		//scrollLength = `${document.querySelector(".item").offsetHeight * 1.48}`

		window.addEventListener("wheel", smoothScroll, { passive: false })
		window.addEventListener("touchmove", smoothScroll, { passive: false })
		//console.log("222")
	} else {
		//console.log("remowe")
		window.removeEventListener("wheel", smoothScroll)
		window.removeEventListener("touchmove", smoothScroll)
	}
}, 100)

function isElementVisible(element) {
	if (!element) return false

	const rect = element.getBoundingClientRect()
	const windowHeight = window.innerHeight || document.documentElement.clientHeight

	// Проверяем, виден ли элемент больше чем на 50%
	//return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
	return rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5
}

//~asffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
function remToPixels(rem) {
	var fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
	return rem * fontSize
}

var pixels = remToPixels(2.8125)
//console.log(pixels)
//?fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
function smoothScrollTo1(element, duration, distanceFromTop = 0) {
	if (element == "flfl") {
		const ln1 = document.querySelector(".welcome").offsetHeight
		const ln2 = document.querySelector(".con").offsetHeight * 0.5

		const rect = ln1 + ln2
		const startPos = window.pageYOffset
		const distance = rect - startPos
		let startTime = null
		//console.log(ln1, ln2, rect, startPos, distance)

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime
			const elapsedTime = currentTime - startTime
			const scroll = ease(elapsedTime, startPos, distance, duration)
			window.scrollTo(0, scroll)
			if (elapsedTime < duration) requestAnimationFrame(animation)
		}

		function ease(t, b, c, d) {
			t /= d / 2
			const factor = 1.5 // Увеличьте этот коэффициент для более медленной прокрутки
			if (t < 1) return (c / 2) * Math.pow(t, factor) + b
			t--
			return (-c / 2) * (Math.pow(t, factor) * (t - 2) - 1) + b
		}

		requestAnimationFrame(animation)
		//!2sadddddddddddddddddddddddddddddddddddddddddddd2
	} else if (element == "ffd") {
		let arnh = window.innerHeight
		let item = document.querySelector(".item").offsetHeight
		let header = document.querySelector(".header_fixed").offsetHeight
		let hehe = (arnh - item) / 2 + header / 2

		let rect = distanceFromTop

		const startPos = window.pageYOffset
		const distance = rect - (startPos + hehe * 2)
		let startTime = null
		console.log(header, hehe, rect, startPos, distance)

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime
			const elapsedTime = currentTime - startTime
			const scroll = ease(elapsedTime, startPos, distance, duration)
			window.scrollTo(0, scroll)
			if (elapsedTime < duration) requestAnimationFrame(animation)
		}

		function ease(t, b, c, d) {
			t /= d / 2
			const factor = 1.5 // Увеличьте этот коэффициент для более медленной прокрутки
			if (t < 1) return (c / 2) * Math.pow(t, factor) + b
			t--
			return (-c / 2) * (Math.pow(t, factor) * (t - 2) - 1) + b
		}

		requestAnimationFrame(animation)
		//!2sadddddddddddddddddddddddddddddddddddddddddddd2
	} else {
		const targetPos = element.offsetTop
		const startPos = window.pageYOffset
		const distance = targetPos - startPos
		let startTime = null
		//console.log(distance)
		function animation(currentTime) {
			if (startTime === null) startTime = currentTime
			const elapsedTime = currentTime - startTime
			const scroll = ease(elapsedTime, startPos, distance, duration)
			window.scrollTo(0, scroll)
			if (elapsedTime < duration) requestAnimationFrame(animation)
		}

		function ease(t, b, c, d) {
			t /= d / 2
			const factor = 1.5 // Увеличьте этот коэффициент для более медленной прокрутки
			if (t < 1) return (c / 2) * Math.pow(t, factor) + b
			t--
			return (-c / 2) * (Math.pow(t, factor) * (t - 2) - 1) + b
		}

		requestAnimationFrame(animation)
	}
}

const flags1 = document.querySelectorAll(".flag")
const flags2 = document.querySelectorAll(".flag-2")

let counter1 = parseInt(localStorage.getItem("counter1")) || 0
let counter2 = parseInt(localStorage.getItem("counter2")) || 0

//counter1 = 0
//counter2 = 0
function handleVisibility1(entries) {
	console.log(counter1, counter2)

	const entry = entries[0]
	if (entry.isIntersecting) {
		counter1++
		localStorage.setItem("counter1", counter1) // Сохраняем значение счетчика в localStorage
		if (counter1 % 2 === 1) {
			smoothScrollTo1(document.getElementById("anchor1"), 1000)
		} else {
			smoothScrollTo1("flfl", 1000)
		}
	}
}

function handleVisibility2(entries) {
	console.log(counter1, counter2)

	const entry = entries[0]
	if (entry.isIntersecting) {
		counter2++
		let lnlnElement = document.getElementById("anchor3")
		let distanceFromTop = lnlnElement.offsetTop
		//console.log(distanceFromTop + "px")
		localStorage.setItem("counter2", counter2) // Сохраняем значение счетчика в localStorage
		if (counter2 % 2 === 1) {
			smoothScrollTo1("ffd", 1000, distanceFromTop)
			//console.log(, 1000)
		} else {
			console.log("ffd2222")
			smoothScrollTo1(document.getElementById("anchor4"), 1000)
		}
	}
}

const observer1 = new IntersectionObserver(handleVisibility1)
const observer2 = new IntersectionObserver(handleVisibility2)

flags1.forEach((flag) => {
	observer1.observe(flag)
})
flags2.forEach((flag) => {
	observer2.observe(flag)
})
//?fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

document.addEventListener("DOMContentLoaded", function () {
	//let top_bot = document.documentElement.clientHeight / 2 - 33.5 * vh + `px`
	let top_bot = `36%`

	let mediaQuery1150 = window.matchMedia("(max-width: 1150px)")
	let mediaQuery900 = window.matchMedia("(max-width: 900px)")
	let mediaQuery605 = window.matchMedia("(max-width: 605px)")
	let mediaQuery400 = window.matchMedia("(max-width: 400px)")

	function handleMediaQueryChange1150(mediaQuery) {
		if (mediaQuery.matches) {
			let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
			// Set the width of the element
			let element = document.querySelector(".lotti-1")
			element.style.width = screenWidth - 30 + "px"
			// Получить среднюю позицию документа
			top_bot = document.documentElement.clientHeight / 2 - 5 * vh + `px`
		}
	}

	function handleMediaQueryChange900(mediaQuery) {
		if (mediaQuery.matches) {
			let element = document.querySelector("#animationWindow1")
			element.style.setProperty("width", "clamp(250px, 85vw, 830px)")
			top_bot = document.documentElement.clientHeight / 2 - 12 * vh + `px`
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

			//~fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
			// Получаем элемент страницы, на котором будет происходить свайп
			const swipeElement = document.documentElement

			// Переменные для отслеживания начальной и конечной позиции свайпа
			let startPosY = 0
			let endPosY = 0

			// Обработчик события начала свайпа
			swipeElement.addEventListener("touchstart", function (event) {
				startPosY = event.touches[0].clientY
			})

			// Обработчик события окончания свайпа
			swipeElement.addEventListener("touchend", function (event) {
				endPosY = event.changedTouches[0].clientY

				// Вычисляем разницу между начальной и конечной позицией свайпа
				const deltaY = endPosY - startPosY

				// Проверяем направление свайпа и перемещаемся соответственно
				if (deltaY > 0) {
					// Свайп вниз
					smoothScroll(-5000, 3000)
				} else if (deltaY < 0) {
					// Свайп вверх
					smoothScroll(5000, 3000)
				}
			})

			// Функция для плавной прокрутки страницы
			function smoothScroll(distance, duration) {
				const start = window.pageYOffset
				const startTime = "now" in window.performance ? performance.now() : new Date().getTime()

				function scroll() {
					const currentTime = "now" in window.performance ? performance.now() : new Date().getTime()
					const timeElapsed = currentTime - startTime
					const scrollY = easeInOutCubic(timeElapsed, start, distance, duration)
					window.scrollTo(0, scrollY)
					if (timeElapsed < duration) {
						requestAnimationFrame(scroll)
					}
				}

				function easeInOutCubic(t, b, c, d) {
					t /= d / 2
					if (t < 1) return (c / 2) * t * t * t + b
					t -= 2
					return (c / 2) * (t * t * t + 2) + b
				}

				requestAnimationFrame(scroll)
			}
		}
	}
	handleMediaQueryChange1150(mediaQuery1150)
	handleMediaQueryChange900(mediaQuery900)
	handleMediaQueryChange605(mediaQuery605)
	handleMediaQueryChange400(mediaQuery400)

	//console.log(top_bot)

	let heightScroll1 = 150
	let heightScroll2 = 40
	let heightScroll3 = 70

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
				//	let element = document.querySelector(".lotti-1")
				//	let topValue = element.offsetTop
				//	console.log(topValue)
				//},
				end: `+=${heightScroll1 * vh}`,
				scrub: 0,
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
		document.querySelector(".lotti-2").style.marginTop = `${document.querySelector(".right").offsetHeight / 18}px`

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
			//gsap.set(".wrap", { autoAlpha: 0.01 })

			//gsap.to(".wrap", {
			//	autoAlpha: 1,
			//	ease: "power1.out",
			//	scrollTrigger: {
			//		trigger: ".lotti-2",
			//		start: `top +=70%`,
			//		end: `+=40%`,
			//		markers: false,
			//		scrub: 0.5,
			//	},
			//})
			//!!!!
			//gsap.to(".right", {
			//	scrollTrigger: {
			//		trigger: ".lotti-2",
			//		start: `top +=19%`,
			//		end: `+=${document.querySelector(".item").offsetHeight - document.querySelector(".ppppp").offsetHeight * 1.67}`,
			//		markers: false,
			//		scrub: 0.5,
			//		pin: ".itiem-1",
			//	},
			//})

			let lotti2 = gsap
				.timeline({
					scrollTrigger: {
						trigger: "#animationWindow2",
						pin: ".left",
						start: "center center+=10%",
						end: () => `+=${document.querySelector(".right").offsetHeight - document.querySelector("#animationWindow2").offsetHeight * 2.05}`,
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

		let element = document.querySelector(".con")
		let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
		let elemW = windowWidth + "px"
		element.style.width = `${elemW}`
		element.style.maxWidth = "1170px"
		element.style.display = "flex"
		element.style.justifyContent = "center"
		document.querySelector(".lotti-1").style.width = "100%"

		//?fff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
		setTimeout(() => {
			let arnh = window.innerHeight
			let item = document.querySelector(".item").offsetHeight
			let header = document.querySelector(".header_fixed").offsetHeight
			let hehe = (arnh - item) / 2 + header / 2
			//console.log(arnh, "arnh")
			//console.log(item, "item")
			//console.log(header, "header")
			//console.log(hehe, "arnh")

			document.querySelector("#anchor1").style.height = `${hehe}px`
		}, 100)
		//setInterval(() => {
		//	if (document.querySelector(".lotti-1").offsetTop > 0) {
		//		//element.style.removeProperty("left")
		//	}
		//	//document.querySelector(".lotti-1").style.left = "auto"
		//	//
		//	//document.querySelector(".lotti-1").style.marginLeft = "-23px"
		//	//document.querySelector(".lotti-1").style.width = `${elemW}`
		//}, 10)
		//!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
	}, 1300)
})
