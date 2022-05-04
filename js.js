const registorForm = document.querySelector('.registor-form')
const loginForm = document.querySelector('.login-form')

const registorBtn = document.querySelector('.registor-btn')
const loginBtn = document.querySelector('.login-btn')
const modal = document.querySelector('.modal')


// registorForm
function showRegistor() {
    modal.classList.add('open')
    registorForm.classList.add('open-show')
}

function closeRegistor() {
    modal.classList.remove('open')
    registorForm.classList.remove('open-show')
}

registorBtn.addEventListener('click', showRegistor)
modal.addEventListener('click', closeRegistor)

//ngăn sự nổi bọt

registorForm.addEventListener('click', function(e) {
    e.stopPropagation()
})

//loginForm

function showLoginForm() {
    modal.classList.add('open')
    loginForm.classList.add('open-show')
}

function closeLoginForm() {
    modal.classList.remove('open')
}

loginBtn.addEventListener('click', showLoginForm)
modal.addEventListener('click', closeLoginForm)

//ngăn sự nổi bọt
loginForm.addEventListener('click', function(e) {
    e.stopPropagation()
})