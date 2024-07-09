// const button = document.getElementById('button')
// const random = document.getElementById('random')

// button.addEventListener('click',()=>{
//     random.innerHTML = Math.ceil(Math.random()*5)
//     if(parseInt(random.innerHTML)===5){
//         setTimeout(()=>{
//             alert('GANASTE')
//         },100)
//     }
// })

// const number = document.getElementById('number')
// const text = document.getElementById('text')
// const random = document.getElementById('random')
// const button = document.getElementById('button')

// button.addEventListener('click',(e)=>{
//     e.preventDefault()
//     const newText = number.value
//     text.innerHTML = newText
    
// })

// setInterval(()=>{
//     const number_random = Math.ceil(Math.random()*5)
//     random.innerHTML = number_random
// },2000)

// if(parseInt(number.value)==parseInt(random.innerHTML)) alert('ERES EL GANADOR')

// console.log(parseInt(number.value)) Para obtener el numero del input para la comparacion de la ruleta
// parseInt(random.textContent) Para obtener el numero random 

const number = document.getElementById('number')
const button = document.getElementById('button')
const result = document.getElementById('result')
const random = document.getElementById('random')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    const number_User = number.value 
    if(Math.sign(number_User)===-1) return alert('No se admiten números negativos')
    if(number_User === '') return alert('No se detectó un número')
    if(number_User <= 0 || number_User > 5) return alert('El número está fuera de rango')
    else result.textContent = number_User

    setTimeout(()=>{
    const number_Random = Math.ceil(Math.random()*5)
    random.textContent = number_Random

    if(parseInt(number.value)==parseInt(random.textContent)){
        setTimeout(()=>{
            alert('FELICIDADES GANASTE')
        },500)
    } 
    else{
        setTimeout(()=>{
            alert('Lo siento, pero vuelve a intentarlo...')
        },500)
    }
    },2000)

})