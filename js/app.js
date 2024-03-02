// ^ START
// ^ START
let startTime = performance.now()

let windowHeight = window.innerHeight || document.documentElement.clientHeight
let vh = windowHeight / 100
let startElement
const socialIcons = document.querySelectorAll(".footer__social-item")
const texts = document.querySelector(".wrap").querySelectorAll(".lotti-title")
const flags = document.querySelectorAll(".flag-title")
let visibleIndex = -1 // Индекс видимой надписи
let startLoadTime = new Date().getTime()
let scrollLength = `${90 * vh}`
let pixels = remToPixels(2.8125)

//// ^ Mobil-nav
//// ^ Mobil-nav

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

// ^ Function GLOBAL
// ^ Function GLOBAL

function handleTabTouchStart(event) {
	startElement = event.target
}

function handleTabTouchEnd(event) {
	var endElement = event.target

	if (startElement === endElement) {
		if (startElement.classList.contains("button") && startElement.closest(".wrap-mob")) {
			window.location.href = "#"
		}
		if (startElement.classList.contains("button") && startElement.closest(".database")) {
			window.location.href = "#"
		}
		if (startElement.classList.contains("database__card-link") && startElement.closest(".database")) {
			window.location.href = "#"
		}
	}
}

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
		".animate-on-scroll-1, .animate-on-scroll-11, .animate-on-scroll-2, .animate-on-scroll-3, .animate-on-scroll-4, .animate-on-scroll-5, .animate-on-scroll--left, .animate-on-scroll--left-2, .animate-on-scroll--right-1, .animate-on-scroll--right-2, .animate-on-scroll--right-3, .animate-on-scroll--right-4, .animate-on-scroll--right-5"
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

function isElementVisible(element) {
	if (!element) return false

	const rect = element.getBoundingClientRect()
	const windowHeight = window.innerHeight || document.documentElement.clientHeight

	return rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5
}

function remToPixels(rem) {
	let fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
	return rem * fontSize
}

function recalculation() {
	let header = document.querySelector(".header_fixed").offsetHeight
	let hehe = header + document.querySelector(".database__title").offsetHeight * 1.2

	//document.querySelector("#anc1").style.height = `${hehe}px`
	document.querySelector("#anchor4").style.height = `${hehe}px`

	let windowHeight = window.innerHeight

	// Получаем высоту фиксированной шапки
	let headerHeight = document.querySelector(".header_fixed").offsetHeight

	// Находим все элементы с классом 'item'
	let items = document.querySelectorAll(".wrap-mob .item")

	// Перебираем все найденные элементы
	items.forEach((item, index) => {
		let itemHeight = item.offsetHeight
		// Вычисляем высоту для соответствующего внутреннего блока

		let anchor = document.querySelector(`#ancs${index + 1}`)

		let anchorHeight = (windowHeight - itemHeight + anchor.offsetHeight) / 2 + headerHeight / 2

		// Проверяем, существует ли такой элемент
		if (anchor) {
			// Устанавливаем вычисленную высоту
			anchor.style.height = `${anchorHeight}px`
		}
	})
}

let checkHeightChange = (function () {
	let lastHeight = null // Инициализируем переменную для хранения последней высоты

	return function () {
		let currentHeight = window.innerHeight // Получаем текущую высоту окна
		if (currentHeight === lastHeight) {
			// Если высота не изменилась
			return false
		} else {
			// Если высота изменилась
			lastHeight = currentHeight // Обновляем последнюю высоту
			return true
		}
	}
})()

function isUserBelowLottiSection() {
	// Проверяем, находится ли пользователь ниже блока с классом 'lotti-section'
	const lottiSection = document.querySelector(".cube")

	if (lottiSection) {
		// Получаем позицию элемента относительно viewport
		const rect = lottiSection.getBoundingClientRect()

		// Вычисляем абсолютную позицию элемента относительно документа
		// rect.bottom дает нам позицию нижней границы элемента относительно viewport
		// window.scrollY дает нам количество пикселей, на которое была прокручена страница вертикально
		const absoluteElementBottom = rect.bottom + window.scrollY

		// Если вертикальная прокрутка больше, чем абсолютная позиция нижней границы элемента,
		// это означает, что пользователь находится ниже этого элемента
		if (window.scrollY > absoluteElementBottom) {
			return true // Пользователь находится ниже
		}
	}

	return false // Пользователь не находится ниже или элемент не найден
}

function smoothScrollTo1(element, duration, flag = 0) {
	if (window.innerWidth <= 480) {
		if (flag === 1) {
			duration = 800
		} else {
			duration = 700
		}
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
	} else {
		setTimeout(() => {
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
		}, 10)
	}
}

// ^ Launching global functions
// ^ Launching global functions

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

// Устанавливаем начальную прозрачность для надписей
texts.forEach((text) => {
	text.style.opacity = "0"
})

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

const flags1 = document.querySelectorAll(".flag")
const flags2 = document.querySelectorAll(".flag-2")
const flags3 = document.querySelectorAll(".flag-3")
const flags4 = document.querySelectorAll(".flag-4")
const flags5 = document.querySelectorAll(".flag-5")

const flags6 = document.querySelectorAll(".flag-6")
const flags7 = document.querySelectorAll(".flag-7")
const flags8 = document.querySelectorAll(".flag-8")
const flags9 = document.querySelectorAll(".flag-9")

function getFlagPosition(elementSelector) {
	let flagElement = document.querySelector(elementSelector)

	if (flagElement) {
		let flagPosition = flagElement.offsetTop
		return flagPosition
	} else {
		return null
	}
}

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
	if (window.pageYOffset === 0 || document.documentElement.scrollTop === 0) {
		counter1 = 1
		counter2 = 1
		counter3 = 1
		counter4 = 1
		counter5 = 1

		counter6 = 1
		counter7 = 1
		counter8 = 1
		counter9 = 1
	}
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
	if (window.innerWidth > 480) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter1++
			if (counter1 % 2 === 1) {
				smoothScrollTo1("flfl", 1000)
			} else {
				smoothScrollTo1(document.getElementById("anc01"), 1000)
			}
		}
	} else {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter1++
			if (counter1 % 2 === 1) {
				smoothScrollTo1("flfl", 1000)
			} else {
				smoothScrollTo1(document.getElementById("ancs1"), 1000, 1)
			}
		}
	}
}
function handleVisibility2(entries) {
	if (window.innerWidth <= 480) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter2++
			if (counter2 % 2 === 1) {
				smoothScrollTo1(document.getElementById("ancs8"), 1000)
			} else {
				smoothScrollTo1(document.getElementById("anchor4"), 1000)
			}
		}
	} else {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter2++
			if (counter2 % 2 === 1) {
				smoothScrollTo1(document.getElementById("anc04"), 1000)
			} else {
				smoothScrollTo1(document.getElementById("anchor4"), 1000)
			}
		}
	}
}
function handleVisibility3(entries) {
	if (window.innerWidth > 480) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter3++
			if (counter3 % 2 === 1) {
				smoothScrollTo1(document.getElementById("anc01"), 1000)
			} else {
				smoothScrollTo1(document.getElementById("anc02"), 1000)
			}
		}
	} else {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter3++
			if (counter3 % 2 === 1) {
				smoothScrollTo1(document.getElementById("ancs1"), 1000)
			} else {
				smoothScrollTo1(document.getElementById("ancs2"), 1000)
			}
		}
	}
}
function handleVisibility4(entries) {
	if (window.innerWidth > 480) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter4++
			if (counter4 % 2 === 1) {
				smoothScrollTo1(document.getElementById("anc02"), 1000)
			} else {
				smoothScrollTo1(document.getElementById("anc03"), 1000)
			}
		}
	} else {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter4++
			if (counter4 % 2 === 1) {
				smoothScrollTo1(document.getElementById("ancs2"), 1000)
			} else {
				smoothScrollTo1(document.getElementById("ancs3"), 1000)
			}
		}
	}
}

function handleVisibility5(entries) {
	if (window.innerWidth > 480) {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter5++
			if (counter5 % 2 === 1) {
				smoothScrollTo1(document.getElementById("anc03"), 1000)
			} else {
				smoothScrollTo1(document.getElementById("anc04"), 1000)
			}
		}
	} else {
		const entry = entries[0]
		if (entry.isIntersecting) {
			counter5++
			if (counter5 % 2 === 1) {
				smoothScrollTo1(document.getElementById("ancs3"), 1000)
			} else {
				smoothScrollTo1(document.getElementById("ancs4"), 1000)
			}
		}
	}
}

function handleVisibility6(entries) {
	const entry = entries[0]
	if (entry.isIntersecting) {
		counter6++
		if (counter6 % 2 === 1) {
			smoothScrollTo1(document.getElementById("ancs4"), 1000)
		} else {
			smoothScrollTo1(document.getElementById("ancs5"), 1000)
		}
	}
}

function handleVisibility7(entries) {
	const entry = entries[0]
	if (entry.isIntersecting) {
		counter7++
		if (counter7 % 2 === 1) {
			smoothScrollTo1(document.getElementById("ancs5"), 1000)
		} else {
			smoothScrollTo1(document.getElementById("ancs6"), 1000)
		}
	}
}

function handleVisibility8(entries) {
	const entry = entries[0]
	if (entry.isIntersecting) {
		counter8++
		if (counter8 % 2 === 1) {
			smoothScrollTo1(document.getElementById("ancs6"), 1000)
		} else {
			smoothScrollTo1(document.getElementById("ancs7"), 1000)
		}
	}
}

function handleVisibility9(entries) {
	const entry = entries[0]
	if (entry.isIntersecting) {
		counter9++
		if (counter9 % 2 === 1) {
			smoothScrollTo1(document.getElementById("ancs7"), 1000)
		} else {
			smoothScrollTo1(document.getElementById("ancs8"), 1000)
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

setTimeout(() => {
	setInterval(() => {
		//! кручение анимации 1 на пк
		const element1 = document.querySelector(".lotti-1")
		const element2 = document.querySelector(".lotti-2")

		if (window.innerWidth > 1030) {
			if (isElementVisible(element1)) {
				scrollLength = `${document.querySelector(".con").offsetHeight / 2.6}`
				window.addEventListener("wheel", smoothScroll, { passive: false })
			} else if (!isElementVisible(element1) && isElementVisible(element2)) {
				scrollLength = `${200 * vh}`

				window.addEventListener("wheel", smoothScroll, { passive: false })
			} else {
				window.removeEventListener("wheel", smoothScroll)
			}
		}

		// Находим элементы по классу
		const lottiSection = document.querySelector(".flag")
		const upBlock = document.querySelector(".up")

		// Вычисляем позицию блока .lotti-section относительно верха страницы
		const lottiPosition = lottiSection.getBoundingClientRect().top + window.scrollY

		// Проверяем, находится ли пользователь ниже или на уровне блока .lotti-section
		if (window.scrollY >= lottiPosition) {
			// Применяем одни стили, если пользователь ниже или на блоке .lotti-section
			upBlock.style.opacity = "1" // Пример изменения стиля
			upBlock.style.cursor = "pointer" // Дополнительные стили можно добавить здесь
			upBlock.style.pointerEvents = "all"
		} else {
			// Применяем другие стили, если пользователь выше блока .lotti-section
			upBlock.style.opacity = "0"
			upBlock.style.cursor = "none"
			upBlock.style.pointerEvents = "none"
		}
	}, 100)

	setInterval(() => {
		let count = 0
		//! перерасчет для мобилы
		if (checkHeightChange()) {
			if (!isUserBelowLottiSection()) {
				count += 1
				recalculation()
			}
		}
	}, 5)

	document.querySelector(".up").addEventListener("click", function () {
		const interval = 10 // Задержка в миллисекундах (0.1 секунда)
		const step = 30000 // Шаг прокрутки в пикселях

		const intervalId = setInterval(() => {
			// Определяем элемент для прокрутки
			const scrollElement = document.documentElement.scrollTop ? document.documentElement : document.body

			// Новая позиция после прокрутки
			const newPosition = scrollElement.scrollTop - step

			// Проверяем, не достигли ли мы верха страницы или предела прокрутки
			if (scrollElement.scrollTop <= 0) {
				clearInterval(intervalId)
			} else {
				scrollElement.scrollTop = newPosition
			}
		}, interval)
	})
}, 1500)

// Подключение обработчика события прокрутки
window.addEventListener("scroll", function () {})

document.addEventListener("touchstart", handleTabTouchStart)
document.addEventListener("touchend", handleTabTouchEnd)

window.addEventListener("scroll", checkElapsedTime)
window.addEventListener("load", checkElapsedTime)

// ^fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ^fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

// ^fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ^fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ^fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ^fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ^fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

document.addEventListener("DOMContentLoaded", function () {
	// ^ LET
	// ^ LET
	let counterLoad = parseInt(localStorage.getItem("counterLoad")) || 0
	let mediaQuery = window.matchMedia("(max-width: 766px)")

	let heightScroll1 = 150
	let heightScroll2 = 40
	let heightScroll3 = 70

	// ^ FUNCTION
	// ^ FUNCTION
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

	//!СКРЫТИЕ ШАПКИ (НЕТ)
	if (window.innerWidth <= 480) {
		//function ease(t, b, c, d) {
		//	t /= d / 2
		//	const factor = 0.995 // Увеличьте этот коэффициент для более медленной прокрутки
		//	if (t < 1) return (c / 2) * Math.pow(t, factor) + b
		//	t--
		//	return (-c / 2) * (Math.pow(t, factor) * (t - 2) - 1) + b
		//}
		//const observer = new IntersectionObserver(
		//	(entries) => {
		//		entries.forEach((entry) => {
		//			if (entry.isIntersecting) {
		//				// Отключаем обычную прокрутку
		//				document.body.style.overflow = "hidden"
		//				// Вычисляем позицию для прокрутки
		//				const yOffset = window.innerHeight * 0.21 // 35% от верха экрана
		//				const targetYPosition = entry.target.getBoundingClientRect().top + window.pageYOffset - yOffset
		//				const startYPosition = window.pageYOffset
		//				const distance = targetYPosition - startYPosition
		//				let start = null
		//				const duration = 700 // Продолжительность анимации в мс
		//				function step(timestamp) {
		//					if (!start) start = timestamp
		//					const progress = timestamp - start
		//					const y = ease(progress, startYPosition, distance, duration)
		//					window.scrollTo(0, y)
		//					if (progress < duration) {
		//						window.requestAnimationFrame(step)
		//					} else {
		//						// Восстанавливаем прокрутку после завершения анимации
		//						document.body.style.overflow = ""
		//					}
		//				}
		//				window.requestAnimationFrame(step)
		//			}
		//		})
		//	},
		//	{
		//		root: null,
		//		rootMargin: "0px 0px -35% 0px", // Область наблюдения начинается на 40% выше нижней границы
		//	}
		//)
		//// Начинаем наблюдение за элементом
		//const targetElement = document.querySelector(".home-hero-logos")
		//if (targetElement) {
		//	observer.observe(targetElement)
		//}
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
					$("html, body").animate({ scrollTop: "-=" + $(".con").height() / 3.5 }, 750)
				} else if (direction == "up") {
					$("html, body").animate({ scrollTop: "+=" + $(".con").height() / 3.5 }, 750)
				}
			},
			threshold: 0,
		})

		$(".wrap-mob").swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == "down") {
					$("html, body").animate({ scrollTop: "-=" + $(window).height() / 2 }, 500)
				} else if (direction == "up") {
					$("html, body").animate({ scrollTop: "+=" + $(window).height() / 2 }, 500)
				}
			},
			threshold: 0,
		})

		//$(".database").swipe({
		//	swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
		//		if (direction == "down") {
		//			$("html, body").animate({ scrollTop: "-=" + $(window).height() / 2 }, 500)
		//		} else if (direction == "up") {
		//			$("html, body").animate({ scrollTop: "+=" + $(window).height() / 2 }, 500)
		//		}
		//	},
		//	threshold: 0,
		//})
	}

	// ^ launching functions
	// ^ launching functions
	// Добавление обработчика события на изменение состояния медиазапроса
	mediaQuery.addEventListener("change", handleMediaQuery)
	// Запуск обработчика события для начального состояния медиазапроса
	handleMediaQuery(mediaQuery)

	// Закрытие баннера
	$(".page-top-banner__button").click(function () {
		$(".page-top-banner-div").addClass("none")
		$(".page-top-banner").click(function () {
			return false
		})

		setTimeout(() => {
			//console.log("10")

			if (window.innerWidth > 480) {
				// Находим элемент с классом .main
				var mainElement = document.querySelector(".main")

				// Получаем текущее значение paddingTop для этого элемента
				var currentPaddingTop = window.getComputedStyle(mainElement).paddingTop

				// Преобразуем значение paddingTop из строки в число (например, "20px" в 20)
				var currentPaddingTopValue = parseInt(currentPaddingTop, 10)

				// Вычитаем 55 пикселей из текущего значения paddingTop
				var newPaddingTopValue = currentPaddingTopValue - 50

				// Присваиваем измененное значение paddingTop элементу
				mainElement.style.paddingTop = newPaddingTopValue + "px"

				let header = document.querySelector(".header_fixed").offsetHeight
				let hehe = header + document.querySelector(".database__title").offsetHeight * 1.2
				document.querySelector("#anchor4").style.height = `${hehe}px`

				let windowHeight = window.innerHeight

				// Получаем высоту фиксированной шапки
				let headerHeight = document.querySelector(".header_fixed").offsetHeight

				// Находим все элементы с классом 'item'
				let items = document.querySelectorAll(".item")

				// Перебираем все найденные элементы
				items.forEach((item, index) => {
					// Вычисляем высоту для каждого блока 'item'
					let itemHeight = item.offsetHeight
					// Вычисляем высоту для соответствующего внутреннего блока
					let anchor = document.querySelector(`#anc0${index + 1}`)

					let anchorHeight = (windowHeight - itemHeight + anchor.offsetHeight) / 2 + headerHeight / 2

					// Проверяем, существует ли такой элемент
					if (anchor) {
						// Устанавливаем вычисленную высоту
						anchor.style.height = `${anchorHeight}px`
					}
				})
			} else {
				// Находим элемент с классом .main
				var mainElement = document.querySelector(".main")

				// Получаем текущее значение paddingTop для этого элемента
				var currentPaddingTop = window.getComputedStyle(mainElement).paddingTop

				// Преобразуем значение paddingTop из строки в число (например, "20px" в 20)
				var currentPaddingTopValue = parseInt(currentPaddingTop, 10)

				// Вычитаем 55 пикселей из текущего значения paddingTop
				var newPaddingTopValue = currentPaddingTopValue - 66

				// Присваиваем измененное значение paddingTop элементу
				mainElement.style.paddingTop = newPaddingTopValue + "px"

				let header = document.querySelector(".header_fixed").offsetHeight
				let hehe = header + document.querySelector(".database__title").offsetHeight * 1.2
				document.querySelector("#anchor4").style.height = `${hehe}px`

				let windowHeight = window.innerHeight

				// Получаем высоту фиксированной шапки
				let headerHeight = document.querySelector(".header_fixed").offsetHeight

				// Находим все элементы с классом 'item'
				let items = document.querySelectorAll(".wrap-mob .item")

				// Перебираем все найденные элементы
				items.forEach((item, index) => {
					let itemHeight = item.offsetHeight
					// Вычисляем высоту для соответствующего внутреннего блока
					let anchor = document.querySelector(`#ancs${index + 1}`)
					let anchorHeight = (windowHeight - itemHeight + anchor.offsetHeight) / 2 + headerHeight / 2

					// Проверяем, существует ли такой элемент
					if (anchor) {
						// Устанавливаем вычисленную высоту
						anchor.style.height = `${anchorHeight}px`
					}
				})

				// !!!! ОТСТУП
			}
		}, 10)
	})

	document.querySelectorAll(".accordion-button").forEach((button) => {
		button.addEventListener("click", () => {
			const accordionContent = button.nextElementSibling
			button.classList.toggle("active")

			if (button.classList.contains("active")) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
			} else {
				accordionContent.style.maxHeight = null
			}
		})
	})

	// ^ Загрузка
	function asyncOperation1() {
		return new Promise((resolve) => {
			if (parseInt(localStorage.getItem("counterLoad")) == 0) {
				counterLoad = 1
				localStorage.setItem("counterLoad", counterLoad)
				let scrollContainer = document.querySelector(".scrolll")
				scrollContainer.style.cssText = "position: fixed; width: 100%; height: 100%; overflow: hidden;"
			} else {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop
				localStorage.setItem("scrollPosition", scrollTop)
			}

			let endTime = performance.now()
			let timeTaken = endTime - startTime

			console.log(`Preloyd: ${timeTaken} миллисекунд.`)
			resolve()
		})
	}

	function asyncOperation2() {
		return new Promise((resolve) => {
			function LottieScrollTrigger1(vars) {
				var mobileWidth1 = 1025 // Предположим, что ширина мобильного экрана равна 768 пикселей
				let topCS1 = "42%"
				//let topCS1 = 0

				let arnh = window.innerHeight
				let item1 = document.querySelector(".lotti-1").offsetHeight
				//let item2 = document.getElementById("animationWindow1").getBoundingClientRect().height
				let header = document.querySelector(".header_fixed").offsetHeight
				let hehe = (arnh - item1) / 2 + header / 1.45
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
				//
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
				//
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

			//* Мобильная адаптация сцены 1 (еще нет)
			LottieScrollTrigger1({
				target: "#animationWindow1",
				path: "./img/lotti/lotti_1.json",
			})
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

			const element = document.getElementById("animationWindow1")

			let intervalId = setInterval(() => {
				// Ваша проверка
				if (element.offsetHeight !== 0) {
					let endTime = performance.now()
					let timeTaken = endTime - startTime

					//console.log(`Load, scene_1: ${timeTaken} миллисекунд.`)
					resolve()
					clearInterval(intervalId) // Остановка интервала
				}
			}, 35)
		})
	}

	function asyncOperation3() {
		return new Promise((resolve) => {
			setTimeout(() => {
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
				var elem = document.querySelector(".carousel")
				var flkty = new Flickity(elem, {
					// Настройки
					cellAlign: "center",
					contain: true,
					groupCells: 1,
					wrapAround: true,
					prevNextButtons: false, // Убираем кнопки навигации по бокам
					pageDots: false,
				})
				let endTime = performance.now()
				let timeTaken = endTime - startTime

				//console.log(`1700, Уточнение позиции scene_1: ${timeTaken} миллисекунд.`)
				resolve()
			}, 200)
		})
	}

	function asyncOperation4() {
		return new Promise((resolve) => {
			if (window.innerWidth > 480) {
				let header = document.querySelector(".header_fixed").offsetHeight
				let hehe = header + document.querySelector(".database__title").offsetHeight * 1.2
				document.querySelector("#anchor4").style.height = `${hehe}px`

				let windowHeight = window.innerHeight

				// Получаем высоту фиксированной шапки
				let headerHeight = document.querySelector(".header_fixed").offsetHeight

				// Находим все элементы с классом 'item'
				let items = document.querySelectorAll(".item")

				// Перебираем все найденные элементы
				items.forEach((item, index) => {
					// Вычисляем высоту для каждого блока 'item'
					let itemHeight = item.offsetHeight
					// Вычисляем высоту для соответствующего внутреннего блока
					let anchorHeight = (windowHeight - itemHeight) / 2 + headerHeight / 2

					// Находим внутренний блок по ID (предполагаем, что ID следуют схеме 'anchor' + индекс)
					// Учитывая, что индексы начинаются с 0, а ID блоков с 1, необходимо к индексу добавить 1
					let anchor = document.querySelector(`#anc0${index + 1}`)

					// Проверяем, существует ли такой элемент
					if (anchor) {
						// Устанавливаем вычисленную высоту
						anchor.style.height = `${anchorHeight}px`
					}

					if (index === items.length - 1) {
						let endTime = performance.now()
						let timeTaken = endTime - startTime

						//console.log(`Уточнение позиции карточек на пк ДА: ${timeTaken} миллисекунд.`)
						resolve()
					}
				})
			} else {
				let endTime = performance.now()
				let timeTaken = endTime - startTime

				//console.log(`Уточнение позиции карточек на пк НЕТ: ${timeTaken} миллисекунд.`)
				resolve()
			}
		})
	}

	function asyncOperation5() {
		return new Promise((resolve) => {
			if (window.innerWidth > 480) {
				function removeElement(element) {
					while (element.firstChild) {
						element.firstChild.remove()
					}
					element.remove()
					let endTime = performance.now()
					let timeTaken = endTime - startTime

					//console.log(`Удаление сцены 2 по медиазапросу remove1: ${timeTaken} миллисекунд.`)
					resolve()
				}
				if (document.querySelector(".wrap-mob")) {
					const parentElement = document.querySelector(".wrap-mob")
					removeElement(parentElement)
				}
			} else {
				function removeElement(element) {
					while (element.firstChild) {
						element.firstChild.remove()
					}
					element.remove()

					let endTime = performance.now()
					let timeTaken = endTime - startTime

					//console.log(`Удаление сцены 2 по медиазапросу remove2: ${timeTaken} миллисекунд.`)
					resolve()
				}
				const parentElement = document.querySelector(".wrap")
				removeElement(parentElement)
			}
		})
	}

	function asyncOperation6() {
		return new Promise((resolve) => {
			if (window.innerWidth > 480) {
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
										document.querySelector(".right").offsetHeight - document.querySelector("#animationWindow2").offsetHeight * 1.685
										//-
										//8 * vh +
										//document.querySelector(".right").offsetHeight / 32
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

				const element = document.getElementById("animationWindow2")

				let intervalId = setInterval(() => {
					// Ваша проверка
					if (element.offsetHeight !== 0) {
						let endTime = performance.now()
						let timeTaken = endTime - startTime

						//console.log(`Загрузка анимации 2 PC: ${timeTaken} миллисекунд.`)
						resolve()
						clearInterval(intervalId) // Остановка интервала
					}
				}, 20)

				//~ Lotti
			} else {
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
								end: "center 75%",
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
								end: "center 75%",
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
								end: "center 75%",
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
								end: "center 75%",
								scrub: 2,
							},
							frame: proxy2_4.lastFrame,
						})
						.to(proxy2_4, {
							duration: 0.5,
							frame: 12,
						})
				}

				const element = document.getElementById("animationWindow2_4")

				let intervalId = setInterval(() => {
					// Ваша проверка
					if (element.offsetHeight !== 0) {
						let endTime = performance.now()
						let timeTaken = endTime - startTime

						//console.log(`Загрузка анимации 2 mob: ${timeTaken} миллисекунд.`)
						resolve()
						clearInterval(intervalId) // Остановка интервала
					}
				}, 20)
			}
		})
	}

	function asyncOperation7() {
		return new Promise((resolve) => {
			let header = document.querySelector(".header_fixed").offsetHeight
			let hehe = header + document.querySelector(".database__title").offsetHeight * 1.2
			document.querySelector("#anchor4").style.height = `${hehe}px`

			let windowHeight = window.innerHeight

			// Получаем высоту фиксированной шапки
			let headerHeight = document.querySelector(".header_fixed").offsetHeight

			// Находим все элементы с классом 'item'
			let items = document.querySelectorAll(".wrap-mob .item")

			// Перебираем все найденные элементы
			items.forEach((item, index) => {
				let itemHeight = item.offsetHeight
				// Вычисляем высоту для соответствующего внутреннего блока
				let anchorHeight = (windowHeight - itemHeight) / 2 + headerHeight / 2

				let anchor = document.querySelector(`#ancs${index + 1}`)

				// Проверяем, существует ли такой элемент
				if (anchor) {
					// Устанавливаем вычисленную высоту
					anchor.style.height = `${anchorHeight}px`
				}
			})

			let animation = lottie.loadAnimation({
				container: document.getElementById("lottie-animation"), // Ссылка на элемент, в котором будет проигрываться анимация
				renderer: "svg", // Рендеринг анимации в формате SVG
				loop: true, // Бесконечное воспроизведение
				autoplay: true, // Автоматическое воспроизведение при загрузке
				path: "./img/lotti/banner.json",
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice", // Помогает адаптировать анимацию к контейнеру
				},
			})

			animation.setSpeed(0.5)
			let endTime = performance.now()
			let timeTaken = endTime - startTime

			//console.log(`Завершена операция 3: ${timeTaken} миллисекунд.`)
			resolve()
		})
	}

	function asyncOperation8() {
		return new Promise((resolve) => {
			if (parseInt(localStorage.getItem("counterLoad")) == 0) {
				const elements = document.querySelectorAll(".nobar")
				elements.forEach((element) => {
					element.classList.remove("nobar")
				})
				let scrollContainer = document.querySelector(".scrolll")
				let scrollContainer2 = document.querySelector(".body")
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
					let endTime = performance.now()
					let timeTaken = endTime - startTime

					//console.log(`Preloyd close: ${timeTaken} миллисекунд.`)
					resolve()
				}, 400)
			} else {
				const elements = document.querySelectorAll(".nobar")
				elements.forEach((element) => {
					element.classList.remove("nobar")
				})
				let scrollContainer = document.querySelector(".scrolll")
				let scrollContainer2 = document.querySelector(".body")
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
					let endTime = performance.now()
					let timeTaken = endTime - startTime

					console.log(`Preloyd close: ${timeTaken} миллисекунд.`)
					resolve()
				}, 400)
			}
		})
	}

	//function asyncOperation9() {
	//	return new Promise((resolve) => {
	//		console.log("Завершена операция 3")
	//		resolve()
	//	})
	//}

	async function executeSequentially() {
		await asyncOperation1()
		await asyncOperation2()
		await asyncOperation3()
		await asyncOperation4()
		await asyncOperation5()
		await asyncOperation6()
		await asyncOperation7()
		await asyncOperation8()
	}
	executeSequentially()
})
