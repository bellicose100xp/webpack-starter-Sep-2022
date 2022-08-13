import './assets/css/app.css'
import './assets/images/banana.jpg'
import generateJokes from "./GenerateJokes";

console.log(generateJokes())

const bananaImg: HTMLImageElement = new Image();
bananaImg.src = 'banana.jpg'
bananaImg.style.width = '100px'
bananaImg.style.height = '200px'

const app: HTMLElement | null = document.querySelector("#app")
app?.appendChild(bananaImg)