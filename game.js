const colorsArr = ["red", "blue", "green", "yellow"]
const gamePattern = []
const userClickedPattern = []

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
	const randomNumber = Math.floor(Math.random() * 4)
	const randomChosenColour = colorsArr[randomNumber]
	gamePattern.push(randomChosenColour)
	$(`#${randomChosenColour}`).fadeOut(100).fadeIn(100)
	playSound(randomChosenColour)
}

const clickHandler = (e) => {
	const userChosenColor = e.target.id
	userClickedPattern.push(userChosenColor)
	animation(userChosenColor)
	playSound(userChosenColor)
}

$(".btn").click(clickHandler)

nextSequence()
