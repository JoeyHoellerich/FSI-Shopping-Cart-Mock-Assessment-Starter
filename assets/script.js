// grab + and - buttons & quantity
let qDecrease = document.querySelectorAll(".quantity-down");
let qIncrease = document.querySelectorAll(".quantity-up");

let qText = document.querySelectorAll(".total-quantity");

let totPrice = document.querySelectorAll(".total-price");

let removeButtons = document.querySelectorAll(".remove");
let cartItems = document.querySelectorAll(".cart-item");

let currentQuantity = [];
qText.forEach(item => {
    currentQuantity.push(item.innerText.charAt(item.innerText.length - 1));
})

let itemPrices = document.querySelectorAll(".product-info p");
let rockPrice = [];
itemPrices.forEach(item => {
    let price = [];
    for(let i = 0; i < item.innerText.length; i++){
        if(item.innerText[i] != "$" && item.innerText[i] != "."){
            price.push(item.innerText[i]);
            console.log(price);
        }

        if(item.innerText[i] == "."){
            i = item.innerText.length;
        }
    }
    rockPrice.push(price.join(''));
})


// create functions for + and - buttons 
// + button adds 1 to quantity for each time clicked
let increaseQuant = (e) => {
    for (let i = 0; i < qIncrease.length; i++){
        if (qIncrease[i] == e.target){
            currentQuantity[i]++;
            qText[i].innerText = "Quantity: " + currentQuantity[i];
            totPrice[i].innerText = "Total Price: $" + (currentQuantity[i]*rockPrice[i]) + ".00";
        }
    }
}

// - button checks to make sure that the quantity is above 0, if so it will subtract 1 from quantity for each time clicked
let decreaseQuant = (e) => {
    for (let i = 0; i < qIncrease.length; i++){
        if (qDecrease[i] == e.target){
            if (currentQuantity[i] > 0){
                currentQuantity[i]--;
                qText[i].innerText = "Quantity: " + currentQuantity[i];
                totPrice[i].innerText = "Total Price: $" + (currentQuantity[i]*rockPrice[i]) + ".00";
            }
        }
    }
    
}

let removeBut = (e) => {
    for (let i = 0; i < qIncrease.length; i++){
        if (removeButtons[i] == e.target){
            cartItems[i].remove();
        }
    }
}

// add "click" event listeners for each button, runs functions when clicked
qIncrease.forEach(item => {
    item.addEventListener("click", increaseQuant)
})

qDecrease.forEach(item => {
    item.addEventListener("click", decreaseQuant)
})

removeButtons.forEach(item => {
    item.addEventListener("click", removeBut)
})



