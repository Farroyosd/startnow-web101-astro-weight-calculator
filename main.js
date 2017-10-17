//cd ~/oca/startnow-web101-astro-weight-calculator

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
//Below is the dropdown list #1 & #8
  planets.reverse().forEach(output);//will loop through var planets and run function(output)
  
  function output(item){
      item = item[0]; 
var newOption = document.createElement('option'); 
 newOption.text = item; 
    newOption.value = item;
 var list = document.getElementById('planets');
 list.appendChild(newOption);
  };



//#2  will loop through var planets, once match between value of planetName is matched with value of var planets at index 0
//will peform calculation and declare var results the outcome of calculation.
//return result will be declared to variable results                             
function calculateWeight(weight, planetName) {

  for( let i = 0; i < planets.length; i++){
      if(planetName === planets[i][0]){
      
       var result = weight * planets[i][1]//#5
      }
  }
return result;
}
function handleCheckBox(){
  var list = document.getElementById('planets');
  list.removeChild(list.childNodes[10]);
  list.removeChild(list.childNodes[0]);
  list.removeChild(list.childNodes[3]);
};



function handleClickEvent(){

  var userWeight = $('#user-weight').val();//#3
  var planetName = $('select option:selected').val();//#4
  var results = calculateWeight(userWeight, planetName);// declares result of function calculatedWeight to variable results
  
  
    $('#output').text("If you were on "+ planetName +", you would weigh " + results + "lbs!");//#6 
};

$('#calculate-button').click(handleClickEvent);//#7 
$('#checkbox').click(handleCheckBox);// extra credit