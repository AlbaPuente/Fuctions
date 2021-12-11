// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let allNumbers=0;
  let allLetters=0;
  for(i=0; i<param.length; i++){
    if(typeof(param[i])=="number"){
      allNumbers+=param[i];
    }
    else{
      allLetters+=param[i].length;
    }
  
  }
    return allNumbers + allLetters

}
console.log(averageWord(mixedElements));



