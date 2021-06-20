// part 1
// document.getElementById('case-increase').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = caseTotal;
// })
// document.getElementById('case-decrease').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = caseTotal;
// })

//  /  /  /   With function   /  /  /  //
// part 2
// document.getElementById('case-increase').addEventListener('click', function(){
//     handleProductChange(true);
// })
// document.getElementById('case-decrease').addEventListener('click', function(){
//     handleProductChange(false);
// })

// function handleProductChange(isIncrease){
//         const caseInput = document.getElementById('case-count');
//         const caseCount = parseInt(caseInput.value);
//         let caseNewCount = caseCount;
//         if(isIncrease == true){
//             caseNewCount = caseCount + 1;
//         }
//         if(isIncrease == false && caseNewCount > 0){
//             caseNewCount = caseCount - 1;
//         }
//         caseInput.value = caseNewCount;
//         const caseTotal = caseNewCount * 59;
//         document.getElementById('case-total').innerText = caseTotal;
// }

// part - 3
document.getElementById('case-increase').addEventListener('click', function(){
    handleProductChange('case', true);
})
document.getElementById('case-decrease').addEventListener('click', function(){
    handleProductChange('case', false);
})

function handleProductChange(product, isIncrease){
        const caseInput = document.getElementById(product + '-count');
        const caseCount = parseInt(caseInput.value);
        let caseNewCount = caseCount;
        if(isIncrease == true){
            caseNewCount = caseCount + 1;
        }
        if(isIncrease == false && caseNewCount > 0){
            caseNewCount = caseCount - 1;
        }
        caseInput.value = caseNewCount;
        let = caseTotal = 0;
        if(product == 'phone'){
            caseTotal = caseNewCount * 1219;
        }
        if(product == 'case'){
            caseTotal = caseNewCount * 59;
        }
        // const caseTotal = caseNewCount * 59;
        document.getElementById(product + '-total').innerText = '$' + caseTotal;


        calculateTotal();
}

function calculateTotal(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    // const phoneCount =  getInputValue('phone');
    // const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + totalPrice;
    
    const tax = Math.round(totalPrice * 0.1);
    const grandTotal = tax + totalPrice;

    document.getElementById('tex-amount').innerText = '$' + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
// //another function
// function getInputValue(product){
//     const caseInput = document.getElementById(product + 'count');
//     const caseCount = parseInt(caseInput.value);
//     return caseCount;
// }