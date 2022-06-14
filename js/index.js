const localData = localStorage.getItem('token')
console.log(localData);

if (!localData) {
    window.location.pathname = 'login.html'
}