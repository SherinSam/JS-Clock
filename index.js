
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    // console.log('Hi')
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds)
    const secondsDegrees = ((seconds/60) * 360 + 90)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const min = now.getMinutes();
    console.log(min)
    const minDegrees = ((min/60)*360 + 90)
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hour = now.getHours();
    console.log(hour)
    const hourDegrees = ((hour/12)*360 + 90)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000)