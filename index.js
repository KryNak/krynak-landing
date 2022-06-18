function getRandom() {
    return Math.floor(Math.random() * 100)
}

function accomodateStars() {

    for(let i = 0; i < 100; i++){
        const div = document.createElement('div')

        div.style.backgroundColor = 'rgb(255, 255, 255, 0)'
        div.style.width = '2px'
        div.style.height = '2px'
        div.style.position = 'absolute'
        div.style.top = `${getRandom()}%`
        div.style.left = `${getRandom()}%`
        div.style.transform = 'translateZ(-20px)'
        div.style.zIndex = '-1'
        div.style.animation = `twinkle ${Math.floor(Math.random() * 5) + 5}s linear 0s infinite`

        document.body.appendChild(div)
    }
}

function startTyping(el, text) {
    return new Promise(resolve => {

        el.classList.add('cursor')

        let counter = 0
        const interval = setInterval(() => {
            el.innerHTML += text.charAt(counter)

            if(counter === text.length - 1) {
                clearInterval(interval)
                setTimeout(() => {
                    el.style.borderRight = 'none'
                    resolve(true)
                }, 2000)
            }

            ++counter
        }, 100)
    })
}

const nameEl = document.getElementById("name")
const titleEl = document.getElementById("title")

const name = "Krystian Nakielski"
const title = "Junior Java Developer"

Promise.resolve(startTyping(nameEl, name))
    .then(() => {
        startTyping(titleEl, title)
    })

accomodateStars()
