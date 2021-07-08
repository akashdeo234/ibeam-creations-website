//loader
var loader = document.querySelector(".spinner-wrapper")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}



//nav menu function
let menu = document.querySelector(".nav-links");
let handBurgerMenu = document.querySelector(".fa-bars");

handBurgerMenu.addEventListener('click',()=>{
    menu.classList.toggle("open")
})

//text animation

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

/*----------------------------TEXT------------------------------------------ */
  const phrases = [
    'We',
    'Are',
    'Ibeam',
    'Creations'
  ]
  
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()

//counter function
var project = setInterval(projectDone, 20)
var clients = setInterval(happyClients, 20)
var coffee = setInterval(cupsCoffee, 2000)
let count1 = 1;
let count2 = 1;
let count3 = 1;

function projectDone() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 1235) {
        clearInterval(project)
    }
}

function happyClients() {
    count2++
    document.querySelector("#number2").innerHTML = count2
    if (count2 == 1235) {
        clearInterval(clients)
    }
}

function cupsCoffee() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 10) {
        clearInterval(coffee)
    }
}

