//Count Down build ---------------
document.addEventListener('DOMContentLoaded', () => {

    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    let timeLeft = 10

    function countDown (){
        const nine = new Audio('assets/sounds/9.mp3')
        const eight = new Audio('assets/sounds/8.mp3')
        const seven = new Audio('assets/sounds/7.mp3')
        const six = new Audio('assets/sounds/6.mp3')
        const five = new Audio('assets/sounds/5.mp3')
        const four = new Audio('assets/sounds/4.mp3')
        const three = new Audio('assets/sounds/3.mp3')
        const two = new Audio('assets/sounds/2.mp3')
        const one = new Audio('assets/sounds/1.mp3')
        const zero = new Audio('assets/sounds/continue.wav')
// Sounds for Count Down ---------------        
        setInterval(function(){
            if(timeLeft <= 0){
                clearInterval(timeLeft = 0)
            }
           switch(timeLeft){
                case 9:
                    nine.play();
                    break;
                case 8:
                    eight.play();
                    break;
                case 7:
                    seven.play();
                    break;
                case 6: 
                    six.play();
                    break;
                case 5:
                    five.play();
                    break;
                case 4:
                    four.play();
                    break;
                case 3:
                    three.play()
                    break;
                case 2:
                    two.play();
                    break;
                case 1:
                    one.play();
                    break;
                

            }
            

            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -= 1
        }, 1000)
    
    }
    countDown();
    startBtn.addEventListener('click', zero.play())
});
