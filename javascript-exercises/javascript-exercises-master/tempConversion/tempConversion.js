const ftoc = function(temp) {

   let tempC = (temp -32 ) * (5/9);
   if (Number.isInteger(tempC)){
     return tempC;
   }
   return +tempC.toFixed(1);
}

const ctof = function(temp) {
  let tempF =(temp *(9 / 5) + 32)
  if (Number.isInteger(tempF)){
    return tempF;
  }
  return +tempF.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
