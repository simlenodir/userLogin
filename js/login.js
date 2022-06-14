const elForm = document.querySelector('.js-form')
let elInputEmail = document.querySelector('.js-email')
let elInputPassword = document.querySelector('.js-password')


let loginUser = ((evt) => {
    evt.preventDefault()
let data = {
    email : elInputEmail.value.trim() ,
    password :  elInputPassword.value.trim() 
}

fetch('https://reqres.in/api/login', {
    method : 'POST',
    headers: {
        "Content-type" : 'application/json'
    },
    body : JSON.stringify(data)
})
.then((response) => {
    if (response.ok) {
        return response.json()
    } else {
        alert('sorry you did mistake')
        // window.location.pathname = 'login.html'
        elInputEmail.classList.add('is-invalid')
        elInputPassword.classList.add('is-invalid')
        elInputEmail.value = null
        elInputPassword.value = null
        window.document.preventDefault()

    } 
})
.then((data) =>{
    if (data !== undefined) {
        localStorage.setItem('token', JSON.stringify(data))
        window.location.pathname = 'index.html'
    }
} )
.catch((err) => console.log(err))
    
// console.log( 'Login',evt );
})

elForm.addEventListener('submit', loginUser)