

function clickThrough(){
// assign inputs and button to variables
//Inputs Array
const inputs = document.querySelectorAll('.inputField');
console.log(inputs)
//Toggle through Button
const btn = document.getElementById('togBtn');

//initialise i to 0;
inputs[0].classList.add('active');

const inputValueArray = []

let i = 0;

btn.addEventListener('click',  function(){
  
    inputValueArray.push(inputs[i].value);
    inputs[i].classList.remove('active');

    i++
    console.log(i)
    inputs[i].classList.add('active');

})


return inputValueArray

}

let arrayValue =  clickThrough();


// setInterval(function (){console.log(arrayValue)},1000)