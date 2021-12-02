let firstPrice = document.querySelector('.price1').textContent = 8
let quantity = document.querySelector('.quantity')
let totalEl = document.querySelector('.total-el') 


let btnPlus = document.querySelector('.btn-plus')
let btnMinus = document.querySelector('.btn-minus')
let purchase = document.querySelector('.purchase-el')
let deleteEl = document.querySelector('.btn-delete')
let bodyEl = document.querySelector('.sales-body')

let newVal = quantity.textContent 
let quantityVal = 1




btnPlus.addEventListener('click', () => {
    if (quantity.textContent < 50) {
        quantity.textContent = quantityVal +=1
        totalEl.textContent =`Total amount: $${firstPrice * quantity.textContent}`
    }
})

btnMinus.addEventListener('click', () => {
    if (quantity.textContent > 1){
        quantity.textContent -=1
        totalEl.textContent =`Total amount: $${firstPrice * quantity.textContent}`
    }
})

purchase.addEventListener('click', () =>{
    alert('Your purchase is succesful')
})

deleteEl.addEventListener('click', () => {
    bodyEl.textContent = 'Item deleted successfully, cart is empty'
    totalEl.textContent ='Total amount: $ ' + 0
})






