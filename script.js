let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuSection.classList.toggle('on', show)

  show = !show
})

//    Like Button
var btnvar1 = document.getElementById('btnh1')

function Toggle1() {
  if (btnvar1.style.color == 'red') {
    btnvar1.style.color = 'grey'
  } else {
    btnvar1.style.color = 'red'
  }
}

//    Like Button 2
var btnvar2 = document.getElementById('btnh2')

function Toggle2() {
  if (btnvar2.style.color == 'red') {
    btnvar2.style.color = 'grey'
  } else {
    btnvar2.style.color = 'red'
  }
}

//    Like Button 3
var btnvar3 = document.getElementById('btnh3')

function Toggle3() {
  if (btnvar3.style.color == 'red') {
    btnvar3.style.color = 'grey'
  } else {
    btnvar3.style.color = 'red'
  }
}

//    Like Button 4
var btnvar4 = document.getElementById('btnh4')

function Toggle4() {
  if (btnvar4.style.color == 'red') {
    btnvar4.style.color = 'grey'
  } else {
    btnvar4.style.color = 'red'
  }
}
