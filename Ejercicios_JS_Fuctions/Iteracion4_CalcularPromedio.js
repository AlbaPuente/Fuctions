const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let sumNumbers=0;
  for(i=0; i<param.length; i++){
    sumNumbers += param[i]
  }
  
  return sumNumbers/param.length
}
console.log(average(numbers));

