const colorsArr = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []
let started = false
let level = 0

const animation = (color) => {
	const flash = $(`#${color}`).addClass("pressed")
	setTimeout(() => {
		flash.removeClass("pressed")
	}, 100)
}

const playSound = (color) => {
	const sound = new Audio(`./sounds/${color}.mp3`)
	sound.play()
}

const nextSequence = () => {
	userClickedPattern = []
	const randomNumber = Math.floor(Math.random() * 4)
	const randomChosenColour = colorsArr[randomNumber]
	gamePattern.push(randomChosenColour)
	$(`#${randomChosenColour}`).fadeOut(100).fadeIn(100)
	playSound(randomChosenColour)
	level++
	$("#level-title").text(`Level ${level}`)
}

const clickHandler = (e) => {
	const userChosenColor = e.target.id
	userClickedPattern.push(userChosenColor)
	animation(userChosenColor)
	playSound(userChosenColor)
	checkAnswer(userClickedPattern.length - 1)
}

const checkAnswer = (currentLevel) => {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		console.log("success")
		if (gamePattern.length === userClickedPattern.length) {
			setTimeout(() => {
				nextSequence()
			}, 1000)
		}
	} else {
		console.log("wrong")
		const sound = new Audio("./sounds/wrong.mp3")
		sound.play()
		$("body").addClass("game-over")
		setTimeout(() => $("body").removeClass("game-over"), 200)
		$("#level-title").text("Game Over, Press Any Key to Restart")
		started = false
		gamePattern = []
	}
}

$(".btn").click(clickHandler)

$(document).keypress(() => {
	if (!started) {
		started = true
		nextSequence()
		$("#level-title").text("Level 0")
	}
})
