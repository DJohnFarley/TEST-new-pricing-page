
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
const messageArray = ["What is the name of your venue?", "What is the date of your wedding?", "What service are you intersted in?", " What coverage would you like?"]
questionMessage.innerHTML = messageArray[0];
const inputValueArray = []

//Home Lat & Lng

let homeLatLng = [50.957100,  -0.497700 ];
let venueLatLng;



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

     venueLatLng = onPlaceChanged()
     const checkDistance = distance(50.957100,  -0.497700, venueLatLng[0],venueLatLng[1], 'M' )
     console.log(checkDistance)
})
return inputValueArray
}

let arrayValue =  clickThrough();


let autocomplete; 

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types : ['establishment'],
            componentRestrictions : { 'country' : [ 'uk' ] },
            fields: [ 'place_id',   'geometry', 'name'] 
        })
        autocomplete.addListener('place_changed',  onPlaceChanged);
    };  

    function onPlaceChanged(){
            var place = autocomplete.getPlace()
            let venueArr = [place.geometry.location.lat(), place.geometry.location.lng()]
            if(!place.geomtry){
                document.getElementById('autocomplete').placeholder = 'Enter a place';
            } else{
                document.getElementById('autocomplete').innerHTML = place.name;
            }
          return venueArr
    }
    
    function distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist;
        }
    }