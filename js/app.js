/*-------------------------------- Constants --------------------------------*/
import { story } from "./shrek.js"
/*---------------------------- Variables (state) ----------------------------*/
 let currentIndex = 0
/*------------------------ Cached Element References ------------------------*/
const startButton = document.querySelector('#start-button')
const textEl = document.querySelector('#text')
const optionButtonsEl = document.querySelector('#option-buttons')
//const button = document.createElement('button')
const title = document.querySelector('#title1')
// const classBtn = ocument.querySelector('btn')
const resetbtn = document.getElementById('reset')
 

/*----------------------------- Event Listeners
 -----------------------------*/
startButton.addEventListener('click', startGame)
optionButtonsEl.addEventListener('click', select)
resetbtn.addEventListener('click', resetGame )

/*-------------------------------- Functions --------------------------------*/

function resetGame() {
  currentIndex = 0
  textEl.style.display = 'none'
  optionButtonsEl.style.display = 'none'
  title.style.display = 'block'
  startButton.style.display = 'block'
  optionButtonsEl.innerHTML = ''
}

function startGame(){ 
  startButton.style.display = 'none'
  title.style.display = 'none'
  showText()
} 

function showText() {
  const currentState = story[currentIndex]
  textEl.style.display = 'block'
  textEl.innerHTML = currentState.prompt

  optionButtonsEl.style.display = 'block'
  optionButtonsEl.innerHTML = ''

  currentState.options.forEach((option, index) => {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.textContent = option.prompt
    button.dataset.index = index
    button.addEventListener('click', select)
    optionButtonsEl.appendChild(button)
  })
}


function select(event) {
  const indexSelect = event.target.dataset.index
  const currentScene = story[currentIndex]
  const selectOption = currentScene.options[indexSelect]
  
  if (selectOption) {
    currentIndex = selectOption.nextIndex
    showText()
  }
}








//too many names for button? go back and check everything tide to button
//event
//click?
//displays options
//story text 
