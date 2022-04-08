



function clickThrough(){
// assign inputs and button to variables
//Inputs Array
const inputs = document.querySelectorAll('.inputField');
//Toggle through Button
const btn = document.getElementById('togBtn');
//initialise i to 0;
inputs[0].classList.add('active');

//Message/question for each input
const questionMessage = document.getElementById("question");
// console.log(questionMessage)
const messageArray = ["What is the date of your wedding?", "What service are you intersted in?", " What coverage would you like?", "What is your venue post code?"]
questionMessage.innerHTML = messageArray[0];
const inputValueArray = []

let i = 0;

btn.addEventListener('click',  function(){


  
    if(inputs[i].value  ==  "" || inputs[i].value  ==  "Empty" ){
        alert("please select an option")
    }else{

    

        inputValueArray.push(inputs[i].value);
        inputs[i].classList.remove('active');

        i++
        // console.log(i)
        inputs[i].classList.add('active');
        questionMessage.innerHTML = messageArray[i];

    }






})


return inputValueArray

}

let arrayValue =  clickThrough();



// setInterval(function (){console.log(arrayValue)},1000)