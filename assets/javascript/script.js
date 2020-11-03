document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    let timeLeft = 10

    function countDown (){
        setInterval(function(){
            if(timeLeft <= 0){
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            new Audio('https://gofile.io/d/rJASwl').play()
            timeLeft -= 1
        }, 1000)
    }

    startBtn.addEventListener('click', countDown)

} )
