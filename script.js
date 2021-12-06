let x = 1000
let y = 993
let button = document.querySelector("button")
let h1 = document.querySelector("h1")
let arr = []
let text
let counter = 0
let white = document.getElementById("white")
let black = document.getElementById("black")

button.onclick = () => {
	text = "What's 1000-7!?"

	document.body.style.backgroundColor = "black"
	button.remove()
	white.remove()

	setInterval(iteration, 100)

	setTimeout(answer, 2300)

	setTimeout(deadInside, 2300)
}

let iteration = () => {
	arr.push(text[counter])
	document.querySelector("h1").innerHTML = arr.join("")
	counter++
	if (counter > text.length) {
		clearInterval(setInterval)
	}
}

let zxc = () => {
	document.querySelector("h2").innerHTML = x+"-7 = "+y
	x = x-7
	y = y-7
}

let answer = () => {
	setInterval(zxc, 100)
}

let deadInside = () => {
	black.remove()
}