//variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".page")
const btnOpen = document.querySelector("#btnOpen")
const btnBack = document.querySelector("#btnBack")

//array
const fortunePhrase = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados",
    "A maior de todas as torres",
    "Não há que ser forte. Há que ser flexível.",
    "Siga os bons e aprenda com eles.",
]

//events
btnOpen.addEventListener("click", handleOnClick)
btnBack.addEventListener("click", handleComeBack)
document.addEventListener('keydown', handleKeyDown)

//functions
function handleOnClick(event) {
    event.preventDefault()
    toggleWindow()
    getPhrase()

}

function handleComeBack() {
    toggleWindow()
}

function getPhrase() {
    let phrases = fortunePhrase.length
    let randomNumber = Math.floor(Math.random() * phrases)
    screen2.querySelector("p").innerText = `${fortunePhrase[randomNumber]}`
}

function handleKeyDown(e) {
    if (e.key == 'Enter' && screen2.classList.contains('hidden')) {
        handleOnClick()
    } else if (e.key == 'Enter' && screen1.classList.contains('hidden')) {
        handleComeBack()
    }
}

function toggleWindow() {
    screen1.classList.toggle('hidden')
    screen2.classList.toggle('hidden')
}