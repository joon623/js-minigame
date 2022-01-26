const $wrapper = document.getElementById("wrapper")
const $reloadButton = document.querySelector(".button-reload")
const $count = document.querySelector(".div-remainingcount")
const $timer = document.querySelector(".div-timer")
const COUNT_BUTTON_TOP_POSITION = 220

for(let i = 0; i < 10; i++){ 
    const carrot = document.createElement("div")
    carrot.classList.add("carrot-item")
    carrot.setAttribute("data-index", i)
    carrot.style.left = `${makeRandomXPosition()}px`
    carrot.style.top = `${makeRandomYPosition()}px`
    $wrapper.appendChild(carrot)

    const bug = document.createElement("div")
    bug.classList.add("bug-item")
    bug.setAttribute("data-index", i)
    bug.style.left = `${makeRandomXPosition()}px`
    bug.style.top = `${makeRandomYPosition()}px`
    $wrapper.appendChild(bug)
}

function makeRandomXPosition(){ 
    return Math.floor(Math.random() * window.innerWidth)
}

function makeRandomYPosition(){
    let result = Math.floor(Math.random() * window.innerHeight) + COUNT_BUTTON_TOP_POSITION
    if(result >= window.innerHeight) { 
        result -= COUNT_BUTTON_TOP_POSITION
    }
    return result
}

function startCarrotGame() { 
    const bgSound = new HandleSound("./sound/bg.mp3")
    bgSound.play()
    
    let leftTime = 10
    const timer = setInterval(() => { 
        leftTime -= 1
        $timer.innerHTML = `0:${leftTime < 10 ? `0${leftTime}`: leftTime}`
        if(leftTime == 0) { 
            bgSound.pause()
            clearInterval(timer)
        }
    }, 1000)
}

function HandleSound(src){ 
    this.sound = new Audio(src)

    this.play = () => { 
        this.sound.play()
    }

    this.pause = () => { 
        this.sound.pause()
    }
}

$reloadButton.addEventListener("click", (e)=> { 
    location.reload()
})

window.addEventListener("load", (e) => { 
    startCarrotGame()
})

$wrapper.addEventListener("click", (e) => { 
    console.log(e)
})