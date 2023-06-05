// This is the JS file for all the pages


// Get references to plus buttons, minus buttons, and quantity inputs
let plus_btns = document.querySelectorAll('#plus-button');
let minus_btns = document.querySelectorAll('#minus-button');
let qty_inputs = document.querySelectorAll('#quantity');


// Perform subtotal calculation on page load
window.onload = function() {
    subtotal();
};


// Event listener for plus buttons
plus_btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        // Increment the value of the items 
        btn.previousElementSibling.value++;
        // Recalculate the subtotal
        subtotal();
    })
})
// Event listener for minus buttons
minus_btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        // Decrement the value of the items
        btn.nextElementSibling.value = (btn.nextElementSibling.value == 1) ? 1 : btn.nextElementSibling.value - 1;
        // Recalculate the subtotal
        subtotal();
    })
})


// Function to calculate the subtotal
function subtotal() {
    // Get the price, quantity, and delivery cost from the relevant elements
    let price = document.querySelectorAll('.price')[0].textContent;
    let quantity = document.querySelectorAll('#quantity')[0].value;
    let deliveryCost = 0;
    if (document.getElementsByClassName('delivery').length > 0){
        deliveryCost = document.getElementsByClassName('delivery')[0].textContent;
    }
    // Calculate the item subtotal based on price, quantity, and delivery cost
    const itemSubtotal = parseFloat(quantity) * parseFloat(price) + parseFloat(deliveryCost);
    // Update the subtotal and total price with the calculated value
    if (document.getElementsByClassName('subtotal').length > 0){
        document.getElementsByClassName('subtotal')[0].textContent = itemSubtotal;
    }
    if (document.getElementsByClassName('total').length > 0){
        document.getElementsByClassName('total')[0].textContent = itemSubtotal;
    }
}


// Function to remove the item from the cart
function removeCard() {
    // Find and hide the product element associated with the clicked close button
    var elems = document.getElementsByClassName('close-btn');
    for (var i=0;i<elems.length;i+=1){
        elems[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
    }
    // Reset delivery, subtotal, and total values if present
    if (document.getElementsByClassName('delivery').length > 0){
        document.getElementsByClassName('delivery')[0].textContent = 0;
    }
    if (document.getElementsByClassName('subtotal').length > 0){
        document.getElementsByClassName('subtotal')[0].textContent = 0;
    }
    if (document.getElementsByClassName('total').length > 0){
        document.getElementsByClassName('total')[0].textContent = 0;
    }
};


// Function to toggle a CSS class 
function toggleClass() {
    document.querySelector('body').classList.toggle('fixed');
}

// Function to navigate to the order summary page
function checkout() {
    location.href = "ordersummary.html";
}

// Function to navigate to the payment page
function payment() {
    location.href = "payment.html";
}

// Function to submit the form and navigate to the order confirmation page
function submitForm() {
    location.href = "confirmation.html";
}


function openCity(evt, productImg) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(productImg).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function for product page accordion items
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {


        const currentlyActiveAccordionItemHeader = document.querySelector(
            ".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !==
            accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});