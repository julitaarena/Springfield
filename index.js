let form = document.getElementById("form")
let submit = document.getElementById("submit")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")

submit.addEventListener('click', ()=>{
    if (nombre.value && apellido.value && email.value){
    alert ('gracias!')
    form.reset() 
    } else {
        alert('Por favor completa todos los datos.')
        
    }
})

