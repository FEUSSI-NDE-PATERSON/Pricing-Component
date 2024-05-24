// Setting the price for the annual program
let basicPrice = document.querySelector('#basicPrice')
let professionalPrice = document.querySelector('#professionalPrice')
let awr = document.querySelector('#masterPrice')


// Perform the slide
let slider = document.querySelector('#slider')
let slide = document.querySelector('#slide')

slider.addEventListener('click',()=>{
    slider.classList.toggle('sliding')
    slide.classList.toggle('slides')
    if(slider.classList.contains('sliding')){
        basicPrice.textContent = '$199.99'
        professionalPrice.textContent = '$249.99'  
        masterPrice.textContent = '$399.99'
    }
    else{
        basicPrice.textContent = `$19.99`
        professionalPrice.textContent = '$24.99'  
        masterPrice.textContent = '$39.99'

    }
})