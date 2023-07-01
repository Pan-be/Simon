const colorsArr = ["red", "blue", "green", "yellow"]
const gamePattern = []

const nextSequence = () => {
	const randomNumber = Math.floor(Math.random() * 4)
	const randomChosenColour = colorsArr[randomNumber]
	gamePattern.push(randomChosenColour)
	$(`#${randomChosenColour}`).fadeOut(100).fadeIn(100)
	const sound = new Audio(`./sounds/${randomChosenColour}.mp3`)
	sound.play()
}

nextSequence()
