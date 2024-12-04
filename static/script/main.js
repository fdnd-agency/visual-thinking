// console.log('js werkt')
let wrapper = document.querySelector('.wrapper')
let buttonThemeSwitcher = document.querySelector('.themeSwitcher')

buttonThemeSwitcher.addEventListener('click', themeSwitcher)

function themeSwitcher() {
    console.log('werkt')
    wrapper.classList.toggle('liquid-acid-theme')

    if(this.innerHTML === "red pill") {
        this.innerHTML = "blue pill"; // als er Frontend staat veranderd de innerHTML in Groen
      } else {
        this.innerHTML = "red pill"; // als er geen Frontend staat veranderd de innerHTML in Groen
    }
}