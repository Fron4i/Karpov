let windowHeight = window.innerHeight || document.documentElement.clientHeight
var startElement

//

//

function handleTabTouchStart(event) {
	startElement = event.target
}

function handleTabTouchEnd(event) {
	var endElement = event.target
	if (startElement === endElement) {
		if (startElement.classList.contains("button") && startElement.closest(".wrap-mob")) {
			window.location.href = "#"
		}
	}
}

document.addEventListener("touchstart", handleTabTouchStart)
document.addEventListener("touchend", handleTabTouchEnd)

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

const socialIcons = document.querySelectorAll(".footer__social-item")

socialIcons.forEach((icon) => {
	const originalSrc = icon.src
	const hoverSrc = icon.dataset.hover

	icon.addEventListener("mouseenter", () => {
		socialIcons.forEach((otherIcon) => {
			if (otherIcon !== icon) {
				otherIcon.style.opacity = 0
			}
		})
		icon.src = hoverSrc
		icon.style.opacity = 1
	})

	icon.addEventListener("mouseleave", () => {
		socialIcons.forEach((otherIcon) => {
			if (otherIcon !== icon) {
				otherIcon.style.opacity = 1
			}
		})
		icon.src = originalSrc
		icon.style.opacity = 1
	})
})

//?fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

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
//~afsssssssssssssssssssssssss

const texts = document.querySelector(".wrap").querySelectorAll(".lotti-title")
const flags = document.querySelectorAll(".flag-title")

// Устанавливаем начальную прозрачность для надписей
texts.forEach((text) => {
	text.style.opacity = "0"
})

let visibleIndex = -1 // Индекс видимой надписи

// Обрабатываем видимость флагов
flags.forEach((flag, index) => {
	window.addEventListener("scroll", () => {
		const rect = flag.getBoundingClientRect()

		if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
			// Флаг виден на экране

			if (index !== visibleIndex) {
				// Показываем текущую надпись
				texts[index].style.opacity = "1"
				texts[index].style.transition = "opacity 0.5s ease-in-out"

				// Скрываем предыдущую надпись (если есть)
				if (visibleIndex >= 0) {
					texts[visibleIndex].style.opacity = "0"
					texts[visibleIndex].style.transition = "opacity 0.5s ease-in-out"
				}

				visibleIndex = index
			}
		} else if (index === visibleIndex) {
			// Флаг не виден на экране, но был видимым ранее

			// Проверяем, виден ли следующий флаг
			let nextVisibleIndex = -1

			for (let i = index + 1; i < flags.length; i++) {
				const nextRect = flags[i].getBoundingClientRect()
				if (nextRect.top >= 0 && nextRect.bottom <= window.innerHeight) {
					nextVisibleIndex = i
					break
				}
			}

			if (nextVisibleIndex === -1) {
				// Следующий флаг не виден, скрываем надпись
				texts[visibleIndex].style.opacity = "0"
				texts[visibleIndex].style.transition = "opacity 0.5s ease-in-out"
				visibleIndex = -1
			}
		}
	})
})

//~afsssssssssssssssssssssssss

let startLoadTime = new Date().getTime()

function animateOnScroll() {
	let elements = document.querySelectorAll(
		".animate-on-scroll-1, .animate-on-scroll-11, .animate-on-scroll-2, .animate-on-scroll-3, .animate-on-scroll-4, .animate-on-scroll-5, .animate-on-scroll--left, .animate-on-scroll--right-1, .animate-on-scroll--right-2, .animate-on-scroll--right-3, .animate-on-scroll--right-4, .animate-on-scroll--right-5"
	)
	for (let i = 0; i < elements.length; i++) {
		if (isElementInViewport(elements[i])) {
			elements[i].classList.add("show")
		}
	}
}

function checkElapsedTime() {
	let currentTime = new Date().getTime() // Текущее время
	let elapsedTime = currentTime - startLoadTime // Вычисляем прошедшее время

	if (elapsedTime >= 2200) {
		// Если прошло больше или равно 2 секундам (2000 миллисекунд)
		animateOnScroll() // Вызываем функцию анимации при прокрутке
	}
}

window.addEventListener("scroll", checkElapsedTime)
window.addEventListener("load", checkElapsedTime)

//?fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

let scrollLength = `${90 * vh}`

function smoothScroll(event) {
	event.preventDefault()

	const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail))

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

	if (window.innerWidth > 1030) {
		if (isElementVisible(element1)) {
			scrollLength = `${document.querySelector(".con").offsetHeight / 2.6}`
			window.addEventListener("wheel", smoothScroll, { passive: false })
			window.addEventListener("touchmove", smoothScroll, { passive: false })
		} else if (!isElementVisible(element1) && isElementVisible(element2)) {
			scrollLength = `${200 * vh}`

			window.addEventListener("wheel", smoothScroll, { passive: false })
			window.addEventListener("touchmove", smoothScroll, { passive: false })
		} else {
			window.removeEventListener("wheel", smoothScroll)
			window.removeEventListener("touchmove", smoothScroll)
		}
	}
}, 100)

function isElementVisible(element) {
	if (!element) return false

	const rect = element.getBoundingClientRect()
	const windowHeight = window.innerHeight || document.documentElement.clientHeight

	return rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5
}

//~asffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
function remToPixels(rem) {
	let fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
	return rem * fontSize
}

let pixels = remToPixels(2.8125)

//?fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ТТТ
function smoothScrollTo1(element, duration, distanceFromTop = 0) {
	if (window.innerWidth <= 480) {
		duration = 1500
	}
	if (element == "flfl") {
		const ln1 = document.querySelector(".welcome").offsetHeight
		const ln2 = document.querySelector(".con").offsetHeight * 0.5

		const rect = ln1 + ln2
		const startPos = window.pageYOffset
		const distance = rect - startPos
		let startTime = null

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime
			const elapsedTime = currentTime - startTime
			const scroll = ease(elapsedTime, startPos, distance, duration)
			window.scrollTo(0, scroll)
			if (elapsedTime < duration) requestAnimationFrame(animation)
		}

		function ease(t, b, c, d) {
			t /= d / 2
			const factor = 0.995 // Увеличьте этот коэффициент для более медленной прокрутки
			if (t < 1) return (c / 2) * Math.pow(t, factor) + b
			t--
			return (-c / 2) * (Math.pow(t, factor) * (t - 2) - 1) + b
		}

		requestAnimationFrame(animation)
		//!2sadddddddddddddddddddddddddddddddddddddddddddd2
	} else if (
		element == "ffd" ||
		element == "ff66" ||
		element == "ff77" ||
		element == "ff88" ||
		element == "ff99" ||
		element == "ff10" ||
		element == "ff11" ||
		element == "ff12"
	) {
		let arnh = window.innerHeight
		let item = document.querySelector(".item").offsetHeight
		let header = document.querySelector(".header_fixed").offsetHeight
		let hehe

		if (window.innerWidth > 480) {
			hehe = (arnh - item) / 2 + header / 2
		} else {
			hehe = (arnh - item) / 2 + header / 2
		}

		let rect = distanceFromTop

		const startPos = window.pageYOffset
		const distance = rect - (startPos + hehe * 1.75)
		let startTime = null
		//
		function animation(currentTime) {
			if (startTime === null) startTime = currentTime
			const elapsedTime = currentTime - startTime
			const scroll = ease(elapsedTime, startPos, distance, duration)
			window.scrollTo(0, scroll)
			if (elapsedTime < duration) requestAnimationFrame(animation)
		}

		function ease(t, b, c, d) {
			t /= d / 2
			const factor = 0.995 // Увеличьте этот коэффициент для более медленной прокрутки
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
		function animation(currentTime) {
			if (startTime === null) startTime = currentTime
			const elapsedTime = currentTime - startTime
			const scroll = ease(elapsedTime, startPos, distance, duration)
			window.scrollTo(0, scroll)
			if (elapsedTime < duration) requestAnimationFrame(animation)
		}

		function ease(t, b, c, d) {
			t /= d / 2
			const factor = 0.995 // Увеличьте этот коэффициент для более медленной прокрутки
			if (t < 1) return (c / 2) * Math.pow(t, factor) + b
			t--
			return (-c / 2) * (Math.pow(t, factor) * (t - 2) - 1) + b
		}

		requestAnimationFrame(animation)
	}
}

//~dfsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

//~dfsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

//!dfsgggggggggggggg
setTimeout(() => {
	const flags1 = document.querySelectorAll(".flag")
	const flags2 = document.querySelectorAll(".flag-2")
	const flags3 = document.querySelectorAll(".flag-3")
	const flags4 = document.querySelectorAll(".flag-4")
	const flags5 = document.querySelectorAll(".flag-5")

	const flags6 = document.querySelectorAll(".flag-6")
	const flags7 = document.querySelectorAll(".flag-7")
	const flags8 = document.querySelectorAll(".flag-8")
	const flags9 = document.querySelectorAll(".flag-9")

	//let counter1 = parseInt(localStorage.getItem("counter1")) || 1

	function getFlagPosition(elementSelector) {
		let flagElement = document.querySelector(elementSelector)

		if (flagElement) {
			let flagPosition = flagElement.offsetTop
			return flagPosition
		} else {
			return null
		}
	}

	// Устанавливаем значение counter1 в зависимости от положения страницы
	let counter1 = getFlagPosition(".flag") < window.pageYOffset ? 2 : 1
	let counter2 = getFlagPosition(".flag-2") < window.pageYOffset ? 2 : 1
	let counter3 = getFlagPosition(".flag-3") < window.pageYOffset ? 2 : 1
	let counter4 = getFlagPosition(".flag-4") < window.pageYOffset ? 2 : 1
	let counter5 = getFlagPosition(".flag-5") < window.pageYOffset ? 2 : 1

	let counter6 = getFlagPosition(".flag-6") < window.pageYOffset ? 2 : 1
	let counter7 = getFlagPosition(".flag-7") < window.pageYOffset ? 2 : 1
	let counter8 = getFlagPosition(".flag-8") < window.pageYOffset ? 2 : 1
	let counter9 = getFlagPosition(".flag-9") < window.pageYOffset ? 2 : 1

	setInterval(() => {
		//console.log(counter1, counter2, counter3, counter4, counter5, counter6, counter7, counter8, counter9)
	}, 100)

	window.onbeforeunload = function () {
		sessionStorage.setItem("pageData", JSON.stringify(yourDataObject))
	}

	// Восстановление данных при загрузке страницы
	window.onload = function () {
		var storedData = sessionStorage.getItem("pageData")
		if (storedData) {
			yourDataObject = JSON.parse(storedData)
			// Восстановление состояния на основе данных
		}
	}

	function handleVisibility1(entries) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter1++
			if (counter1 % 2 === 1) {
				smoothScrollTo1("flfl", 1000)
			} else {
				smoothScrollTo1(document.getElementById("anchor1"), 1000)
			}
		}
	}
	function handleVisibility2(entries) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter2++
			let lnlnElement = document.getElementById("anchor3")
			let distanceFromTop = lnlnElement.offsetTop
			if (counter2 % 2 === 1) {
				smoothScrollTo1("ffd", 1000, distanceFromTop)

				//console.log("1")
			} else {
				smoothScrollTo1(document.getElementById("anchor4"), 1000)
				//console.log("2")
			}
		}
	}
	function handleVisibility3(entries) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter3++
			let lnlnElement1 = document.getElementById("anchor6")
			let lnlnElement2 = document.getElementById("anchor7")
			let distanceFromTop1 = lnlnElement1.offsetTop
			let distanceFromTop2 = lnlnElement2.offsetTop
			if (counter3 % 2 === 1) {
				smoothScrollTo1(document.getElementById("anchor1"), 1000)
				//console.log("3")
			} else {
				smoothScrollTo1("ff77", 1000, distanceFromTop2)
				//console.log("4")
			}
		}
	}
	function handleVisibility4(entries) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter4++
			let lnlnElement1 = document.getElementById("anchor7")
			let lnlnElement2 = document.getElementById("anchor8")
			let distanceFromTop1 = lnlnElement1.offsetTop
			let distanceFromTop2 = lnlnElement2.offsetTop
			if (counter4 % 2 === 1) {
				smoothScrollTo1("ff77", 1000, distanceFromTop1)
			} else {
				smoothScrollTo1("ff88", 1000, distanceFromTop2)
			}
		}
	}
	function handleVisibility5(entries) {
		if (window.innerWidth <= 480) {
			const entry = entries[0]
			if (entry.isIntersecting) {
				counter5++
				let lnlnElement1 = document.getElementById("anchor8")
				let lnlnElement2 = document.getElementById("anchor9")
				let distanceFromTop1 = lnlnElement1.offsetTop
				let distanceFromTop2 = lnlnElement2.offsetTop
				if (counter5 % 2 === 1) {
					smoothScrollTo1("ff88", 1000, distanceFromTop1)
				} else {
					smoothScrollTo1("ff99", 1000, distanceFromTop2)
				}
			}
		} else {
			const entry = entries[0]
			if (entry.isIntersecting) {
				counter5++
				let lnlnElement1 = document.getElementById("anchor8")
				let lnlnElement2 = document.getElementById("anchor3")
				let distanceFromTop1 = lnlnElement1.offsetTop
				let distanceFromTop2 = lnlnElement2.offsetTop
				if (counter5 % 2 === 1) {
					smoothScrollTo1("ff88", 1000, distanceFromTop1)
				} else {
					smoothScrollTo1("ffd", 1000, distanceFromTop2)
				}
			}
		}
	}

	function handleVisibility6(entries) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter6++
			let lnlnElement1 = document.getElementById("anchor9")
			let lnlnElement2 = document.getElementById("anchor10")
			let distanceFromTop1 = lnlnElement1.offsetTop
			let distanceFromTop2 = lnlnElement2.offsetTop
			if (counter6 % 2 === 1) {
				smoothScrollTo1("ff99", 1000, distanceFromTop1)
				//console.log("7")
			} else {
				smoothScrollTo1("ff10", 1000, distanceFromTop2)
				//console.log("8")
			}
		}
	}

	function handleVisibility7(entries) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter7++
			let lnlnElement1 = document.getElementById("anchor10")
			let lnlnElement2 = document.getElementById("anchor11")
			let distanceFromTop1 = lnlnElement1.offsetTop
			let distanceFromTop2 = lnlnElement2.offsetTop
			if (counter7 % 2 === 1) {
				smoothScrollTo1("ff10", 1000, distanceFromTop1)
				//console.log("7")
			} else {
				smoothScrollTo1("ff11", 1000, distanceFromTop2)
				//console.log("8")
			}
		}
	}

	function handleVisibility8(entries) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter8++
			let lnlnElement1 = document.getElementById("anchor11")
			let lnlnElement2 = document.getElementById("anchor12")
			let distanceFromTop1 = lnlnElement1.offsetTop
			let distanceFromTop2 = lnlnElement2.offsetTop
			if (counter8 % 2 === 1) {
				smoothScrollTo1("ff11", 1000, distanceFromTop1)
			} else {
				smoothScrollTo1("ff12", 1000, distanceFromTop2)
			}
		}
	}

	function handleVisibility9(entries) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter9++
			let lnlnElement1 = document.getElementById("anchor12")
			let lnlnElement2 = document.getElementById("anchor3")
			let distanceFromTop1 = lnlnElement1.offsetTop
			let distanceFromTop2 = lnlnElement2.offsetTop
			if (counter9 % 2 === 1) {
				smoothScrollTo1("ff12", 1000, distanceFromTop1)
			} else {
				smoothScrollTo1("ffd", 1000, distanceFromTop2)
			}
		}
	}

	const observer1 = new IntersectionObserver(handleVisibility1)
	const observer2 = new IntersectionObserver(handleVisibility2)
	const observer3 = new IntersectionObserver(handleVisibility3)
	const observer4 = new IntersectionObserver(handleVisibility4)
	const observer5 = new IntersectionObserver(handleVisibility5)

	const observer6 = new IntersectionObserver(handleVisibility6)
	const observer7 = new IntersectionObserver(handleVisibility7)
	const observer8 = new IntersectionObserver(handleVisibility8)
	const observer9 = new IntersectionObserver(handleVisibility9)

	flags1.forEach((flag) => {
		observer1.observe(flag)
	})
	flags2.forEach((flag) => {
		observer2.observe(flag)
	})
	flags3.forEach((flag) => {
		observer3.observe(flag)
	})
	flags4.forEach((flag) => {
		observer4.observe(flag)
	})
	flags5.forEach((flag) => {
		observer5.observe(flag)
	})

	flags6.forEach((flag) => {
		observer6.observe(flag)
	})
	flags7.forEach((flag) => {
		observer7.observe(flag)
	})
	flags8.forEach((flag) => {
		observer8.observe(flag)
	})
	flags9.forEach((flag) => {
		observer9.observe(flag)
	})
}, 2200)
//?fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

//	//* ЗАГРУЗКА */ */

document.addEventListener("DOMContentLoaded", function () {
	let counterLoad = parseInt(localStorage.getItem("counterLoad")) || 0

	if (parseInt(localStorage.getItem("counterLoad")) == 0) {
		counterLoad = 1
		localStorage.setItem("counterLoad", counterLoad)
		let scrollContainer = document.querySelector(".scrolll")
		let scrollContainer2 = document.querySelector(".body")
		scrollContainer.style.cssText = "position: fixed; width: 100%; height: 100%; overflow: hidden;"

		setTimeout(function () {
			const elements = document.querySelectorAll(".nobar")
			elements.forEach((element) => {
				element.classList.remove("nobar")
			})
			scrollContainer.style.cssText = "" // Сбросить стили
			let loadingElement = document.getElementById("loadingElement")
			loadingElement.style.display = "none"
			scrollContainer2.classList.add("smoke-effect")
			animateOnScroll()

			AOS.init({
				duration: 1350,
				once: true,
			})
			setTimeout(() => {
				scrollContainer2.classList.remove("smoke-effect")
			}, 400)
		}, 2000)
	} else {
		let scrollContainer = document.querySelector(".scrolll")
		let scrollContainer2 = document.querySelector(".body")
		//scrollContainer3.style.cssText = "overflow: hidden;"
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop
		localStorage.setItem("scrollPosition", scrollTop)

		setTimeout(function () {
			const elements = document.querySelectorAll(".nobar")
			elements.forEach((element) => {
				element.classList.remove("nobar")
			})

			scrollContainer.style.cssText = ""
			let savedScrollPosition = localStorage.getItem("scrollPosition") || 0
			window.scrollTo(0, savedScrollPosition)
			localStorage.removeItem("scrollPosition")
			let loadingElement = document.getElementById("loadingElement")
			loadingElement.style.display = "none"
			scrollContainer2.classList.add("smoke-effect")

			animateOnScroll()

			AOS.init({
				duration: 1350,
				once: true,
			})
			setTimeout(() => {
				scrollContainer2.classList.remove("smoke-effect")
			}, 400)
		}, 2000)
	}

	// Создание медиазапроса
	let mediaQuery = window.matchMedia("(max-width: 766px)")

	// Добавление обработчика события на изменение состояния медиазапроса
	mediaQuery.addEventListener("change", handleMediaQuery)

	// Функция обработчика события изменения состояния медиазапроса
	function handleMediaQuery(event) {
		if (event.matches) {
			// Код, который будет выполняться при выполнении медиазапроса
			document.querySelector(".page-top-banner__button").style.right = `${
				document.querySelector(".menu-button").offsetWidth / 2 - document.querySelector(".page-top-banner__button").offsetWidth / 2
			}px`
		} else {
			// Код, который будет выполняться при невыполнении медиазапроса
			document.querySelector(".page-top-banner__button").style.right = `${
				document.querySelector(".button__link.button-header").offsetWidth / 2 - document.querySelector(".page-top-banner__button").offsetWidth / 2
			}px`
		}
	}

	// Запуск обработчика события для начального состояния медиазапроса
	handleMediaQuery(mediaQuery)

	// Добавляем обработчик события на нажатие кнопки
	$(".page-top-banner__button").click(function () {
		$(".page-top-banner-div").addClass("none")
		$(".page-top-banner").click(function () {
			return false
		})

		setTimeout(() => {
			if (window.innerWidth > 480) {
				let arnh = window.innerHeight
				let item1 = document.querySelector(".item--title").offsetHeight
				let item2 = document.querySelector(".item--info").offsetHeight
				let header = document.querySelector(".header_fixed").offsetHeight
				let hehe
				hehe = (arnh - item1 - item2) / 2 + header / 2
				document.querySelector("#anchor1").style.height = `${hehe}px`
				document.querySelector("#anchor4").style.height = `${hehe}px`
				console.log(arnh, item1, item2, header, hehe)
			} else {
				function getViewportHeight() {
					var windowHeight = window.innerHeight // Получаем высоту окна браузера

					// Проверяем, есть ли полоса прокрутки
					var outerDiv = document.createElement("div")
					outerDiv.style.visibility = "hidden"
					outerDiv.style.overflow = "scroll"
					outerDiv.style.width = "100px"
					outerDiv.style.height = "100px"

					var innerDiv = document.createElement("div")
					innerDiv.style.height = "200px"

					outerDiv.appendChild(innerDiv)
					document.body.appendChild(outerDiv)

					var hasScrollbar = outerDiv.offsetHeight > innerDiv.offsetHeight

					document.body.removeChild(outerDiv)

					// Если есть полоса прокрутки, вычитаем ее высоту из общей высоты
					if (hasScrollbar) {
						windowHeight -= getScrollbarHeight()
					}
					//var textElement = document.querySelector(".page-top-banner__text")

					//// Добавляем значение в текст элемента
					//textElement.textContent = `${windowHeight}`
					return windowHeight
				}

				function getScrollbarHeight() {
					var scrollDiv = document.createElement("div")
					scrollDiv.style.height = "100px"
					scrollDiv.style.overflow = "scroll"

					document.body.appendChild(scrollDiv)
					var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight
					document.body.removeChild(scrollDiv)

					return scrollbarHeight
				}

				//let arnh = getViewportHeight()
				//console.log(arnh)

				////let arnh = window.innerHeight
				//let item = document.querySelector(".item").offsetHeight
				//let header = document.querySelector(".header_fixed").offsetHeight
				//let hehe = (arnh - item + document.querySelector("#anchor4").offsetHeight / 0.5) / 2 + header / 2
				//console.log(header)

				//document.querySelector("#anchor1").style.height = `${hehe - 5 * vh}px`
				//document.querySelector("#anchor4").style.height = `${hehe - 5 * vh}px`

				let arnh = window.innerHeight
				console.log(arnh)

				let item = document.querySelector(".item").offsetHeight
				let header = document.querySelector(".header_fixed").offsetHeight
				let hehe = (arnh - item) / 2 + header / 2

				document.querySelector("#anchor1").style.height = `${hehe + 14 * vh}px`
				document.querySelector("#anchor4").style.height = `${hehe + 14 * vh}px`
				// !!!! ОТСТУП
			}
		}, 10)
	})

	if (window.innerWidth <= 480) {
		//!СКРЫТИЕ ШАПКИ
		//let header = document.querySelector(".header_fixed")
		//let isInteracting = false
		//let isMoving = false
		//let timeout
		//function handleTouchStart() {
		//	isInteracting = true
		//	header.classList.add("hidden")
		//}
		//function handleTouchEnd() {
		//	isInteracting = false
		//	if (!isMoving) {
		//		header.classList.remove("hidden")
		//	}
		//}
		//function handleScroll() {
		//	isMoving = true
		//	if (!isInteracting) {
		//		header.classList.add("hidden")
		//	}
		//	clearTimeout(timeout)
		//	timeout = setTimeout(function () {
		//		isMoving = false
		//		if (!isInteracting) {
		//			header.classList.remove("hidden")
		//		}
		//	}, 10)
		//}
		//window.addEventListener("touchstart", handleTouchStart)
		//window.addEventListener("touchend", handleTouchEnd)
		//window.addEventListener("scroll", handleScroll)
	}

	//! Скролл на мобиле
	if (window.innerWidth < 1030) {
		$(".con").swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == "down") {
					$("html, body").animate({ scrollTop: "-=" + $(".con").height() / 2.8 }, 750)
				} else if (direction == "up") {
					$("html, body").animate({ scrollTop: "+=" + $(".con").height() / 2.8 }, 750)
				}
			},
			threshold: 0,
		})

		$(".wrap").swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == "down") {
					$("html, body").animate({ scrollTop: "-=" + $(window).height() }, 500)
				} else if (direction == "up") {
					$("html, body").animate({ scrollTop: "+=" + $(window).height() }, 500)
				}
			},
			threshold: 0,
		})
		$(".wrap-mob").swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == "down") {
					$("html, body").animate({ scrollTop: "-=" + $(window).height() }, 500)
				} else if (direction == "up") {
					$("html, body").animate({ scrollTop: "+=" + $(window).height() }, 500)
				}
			},
			threshold: 0,
		})
	}

	let heightScroll1 = 150
	let heightScroll2 = 40
	let heightScroll3 = 70

	//~fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

	function LottieScrollTrigger1(vars) {
		var mobileWidth1 = 1025 // Предположим, что ширина мобильного экрана равна 768 пикселей
		let topCS1 = "42%"
		//let topCS1 = 0

		let arnh = window.innerHeight
		let item1 = document.querySelector(".lotti-1").offsetHeight
		//let item2 = document.getElementById("animationWindow1").getBoundingClientRect().height
		let header = document.querySelector(".header_fixed").offsetHeight
		let hehe = (arnh - item1) / 2 + header / 1.8
		//console.log(arnh, item1, header, hehe)

		if (window.innerWidth < mobileWidth1) {
			topCS1 = hehe + "px"
		}

		let playhead = { frame: 0 },
			target = gsap.utils.toArray(vars.target)[0],
			st = {
				trigger: vars.target,
				pin: ".lotti-1",
				start: () => `top +=${topCS1}`,
				//onUpdate: () => {
				//	console.log(topCS1)
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
		path: "./img/lotti/lotti_1.json",
	})

	//* Мобильная адаптация
	//if (window.innerWidth > 480) {
	//	LottieScrollTrigger1({
	//		target: "#animationWindow1",
	//		path: "./img/lotti/lotti_1.json",
	//	})
	//} else {
	//	LottieScrollTrigger1({
	//		target: "#animationWindow1",
	//		path: "./img/lotti/lotti_1_mob.json",
	//	})
	//}

	// Code to be executed after a delay of 1 second
	//!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
	setTimeout(function () {
		if (window.innerWidth > 480) {
			function removeElement(element) {
				while (element.firstChild) {
					element.firstChild.remove()
				}
				element.remove()
			}
			if (document.querySelector(".wrap-mob")) {
				const parentElement = document.querySelector(".wrap-mob")
				removeElement(parentElement)
			}

			//~ Lotti

			let proxy2 = LottieProxy2({
				container: "#animationWindow2",
				path: "./img/lotti/lotti_2.json",
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
				let lotti2 = gsap
					.timeline({
						scrollTrigger: {
							trigger: "#animationWindow2",
							pin: ".left",
							start: "center center+=2%",
							end: () =>
								`+=${
									document.querySelector(".right").offsetHeight -
									document.querySelector("#animationWindow2").offsetHeight * 2.05 -
									8 * vh +
									document.querySelector(".right").offsetHeight / 12
								}`,
							scrub: 0.95,
						},
						frame: proxy2.lastFrame,
					})
					.set(proxy2, {
						frame: 0,
					})
					.to(proxy2, {
						duration: 0.09,
						frame: 12,
					})
					.to(proxy2, {
						duration: 0.1,
						frame: 12,
					})
					.to(proxy2, {
						duration: 0.3,
						frame: 24,
					})
					.to(proxy2, {
						duration: 0.1,
						frame: 24,
					})
					.to(proxy2, {
						duration: 0.3,
						frame: 36,
					})
					.to(proxy2, {
						duration: 0.1,
						frame: 36,
					})
					.to(proxy2, {
						duration: 0.3,
						frame: 48,
					})
					.to(proxy2, {
						duration: 0.1,
						frame: 48,
					})
			}
		} else {
			function removeElement(element) {
				while (element.firstChild) {
					element.firstChild.remove()
				}
				element.remove()
			}
			const parentElement = document.querySelector(".wrap")
			removeElement(parentElement)

			//~ Lotti

			let proxy2_1 = LottieProxy2_1({
				container: "#animationWindow2_1",
				path: "./img/lotti/lotti_2-mob-1.json",
			})
			let proxy2_2 = LottieProxy2_2({
				container: "#animationWindow2_2",
				path: "./img/lotti/lotti_2-mob-2.json",
			})
			let proxy2_3 = LottieProxy2_3({
				container: "#animationWindow2_3",
				path: "./img/lotti/lotti_2-mob-3.json",
			})
			let proxy2_4 = LottieProxy2_4({
				container: "#animationWindow2_4",
				path: "./img/lotti/lotti_2-mob-4.json",
			})

			proxy2_1.onLoaded(init2_1)
			proxy2_2.onLoaded(init2_2)
			proxy2_3.onLoaded(init2_3)
			proxy2_4.onLoaded(init2_4)

			function LottieProxy2_1(options) {
				let animation = lottie.loadAnimation({
					renderer: "svg",
					loop: false,
					autoplay: false,
					...options,
					container: gsap.utils.toArray(options.container)[0],
				})

				let frame = 0
				let onLoad

				let proxy2_1 = {
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
					proxy2_1.loaded = true
					proxy2_1.frame = frame
					onLoad && onLoad()
				})

				return proxy2_1
			}
			function LottieProxy2_2(options) {
				let animation = lottie.loadAnimation({
					renderer: "svg",
					loop: false,
					autoplay: false,
					...options,
					container: gsap.utils.toArray(options.container)[0],
				})

				let frame = 0
				let onLoad

				let proxy2_2 = {
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
					proxy2_2.loaded = true
					proxy2_2.frame = frame
					onLoad && onLoad()
				})

				return proxy2_2
			}
			function LottieProxy2_3(options) {
				let animation = lottie.loadAnimation({
					renderer: "svg",
					loop: false,
					autoplay: false,
					...options,
					container: gsap.utils.toArray(options.container)[0],
				})

				let frame = 0
				let onLoad

				let proxy2_3 = {
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
					proxy2_3.loaded = true
					proxy2_3.frame = frame
					onLoad && onLoad()
				})

				return proxy2_3
			}
			function LottieProxy2_4(options) {
				let animation = lottie.loadAnimation({
					renderer: "svg",
					loop: false,
					autoplay: false,
					...options,
					container: gsap.utils.toArray(options.container)[0],
				})

				let frame = 0
				let onLoad

				let proxy2_4 = {
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
					proxy2_4.loaded = true
					proxy2_4.frame = frame
					onLoad && onLoad()
				})

				return proxy2_4
			}

			function init2_1() {
				let lotti2 = gsap
					.timeline({
						scrollTrigger: {
							trigger: "#animationWindow2_1",
							pin: false,
							start: "center bottom",
							end: "center 65%",
							scrub: 2,
						},
						frame: proxy2_1.lastFrame,
					})
					.to(proxy2_1, {
						duration: 0.5,
						frame: 12,
					})
			}

			function init2_2() {
				let lotti2 = gsap
					.timeline({
						scrollTrigger: {
							trigger: "#animationWindow2_2",
							pin: false,
							start: "center bottom",
							end: "center 65%",
							scrub: 2,
						},
						frame: proxy2_2.lastFrame,
					})
					.to(proxy2_2, {
						duration: 0.5,
						frame: 12,
					})
			}

			function init2_3() {
				let lotti2 = gsap
					.timeline({
						scrollTrigger: {
							trigger: "#animationWindow2_3",
							pin: false,
							start: "center bottom",
							end: "center 65%",
							scrub: 2,
						},
						frame: proxy2_3.lastFrame,
					})
					.to(proxy2_3, {
						duration: 0.5,
						frame: 12,
					})
			}

			function init2_4() {
				let lotti2 = gsap
					.timeline({
						scrollTrigger: {
							trigger: "#animationWindow2_4",
							pin: false,
							start: "center bottom",
							end: "center 65%",
							scrub: 2,
						},
						frame: proxy2_4.lastFrame,
					})
					.to(proxy2_4, {
						duration: 0.5,
						frame: 12,
					})
			}
		}

		//!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

		const elements = document.getElementsByClassName("pin-spacer")

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

		//let style = document.createElement("style")
		//style.innerHTML = `

		//`
		//document.head.appendChild(style)

		setTimeout(() => {
			if (window.innerWidth > 480) {
				let arnh = window.innerHeight
				let item = document.querySelector(".item").offsetHeight
				let header = document.querySelector(".header_fixed").offsetHeight
				let hehe = (arnh - item) / 2 + header / 2

				document.querySelector("#anchor1").style.height = `${hehe}px`
				document.querySelector("#anchor4").style.height = `${hehe}px`
			} else {
				function getViewportHeight() {
					var windowHeight = window.innerHeight // Получаем высоту окна браузера

					// Проверяем, есть ли полоса прокрутки
					var outerDiv = document.createElement("div")
					outerDiv.style.visibility = "hidden"
					outerDiv.style.overflow = "scroll"
					outerDiv.style.width = "100px"
					outerDiv.style.height = "100px"

					var innerDiv = document.createElement("div")
					innerDiv.style.height = "200px"

					outerDiv.appendChild(innerDiv)
					document.body.appendChild(outerDiv)

					var hasScrollbar = outerDiv.offsetHeight > innerDiv.offsetHeight

					document.body.removeChild(outerDiv)

					// Если есть полоса прокрутки, вычитаем ее высоту из общей высоты
					if (hasScrollbar) {
						windowHeight -= getScrollbarHeight()
					}
					//var textElement = document.querySelector(".page-top-banner__text")

					//// Добавляем значение в текст элемента
					//textElement.textContent = `${windowHeight}`
					return windowHeight
				}

				function getScrollbarHeight() {
					var scrollDiv = document.createElement("div")
					scrollDiv.style.height = "100px"
					scrollDiv.style.overflow = "scroll"

					document.body.appendChild(scrollDiv)
					var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight
					document.body.removeChild(scrollDiv)

					return scrollbarHeight
				}

				//const items = document.querySelectorAll(".item")
				//items.forEach((item, index) => {
				//	if (index > 0) {
				//		// Condition to start from the second element
				//		let arnh = window.innerHeight

				//		let itema = item.offsetHeight
				//		let header = document.querySelector(".header_fixed").offsetHeight
				//		let hehe2 = (arnh - itema) / 2 + header / 2

				//		if (index === 6) {
				//			item.style.marginTop = `-${hehe2}px`
				//			console.log("6")
				//		} else if (index === 7) {
				//			item.style.marginTop = `-${hehe2}px`
				//			console.log("7")
				//		} else {
				//			item.style.marginTop = `-${hehe2 / 4}px`
				//			console.log("else")
				//		}
				//	}
				//})

				//let arnh = getViewportHeight()
				let arnh = window.innerHeight
				console.log(arnh)

				let item = document.querySelector(".item").offsetHeight
				let header = document.querySelector(".header_fixed").offsetHeight
				let hehe = (arnh - item) / 2 + header / 2

				const addressBarHeight = window.outerHeight - window.innerHeight
				console.log(`Высота адресной строки: ${addressBarHeight}px`)

				document.querySelector("#anchor1").style.height = `${hehe + 5 * vh}px`
				document.querySelector("#anchor4").style.height = `${hehe + 5 * vh}px`
				// !!!! ОТСТУП
			}
		}, 700)

		//!fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
	}, 1700)
})
