

function eqCheck(par1, par2, par3) {
    return (par1 === par2 && par2 !== par3) || 
           (par1 === par3 && par1 !== par2) || 
           (par2 === par3 && par1 !== par2);
  }
 console.log(eqCheck(2, 7, 7));             // ------ Prva zadacha -------  //

 
 var getDaysInMonth = function(month,year) {
    
   return new Date(year, month, 0).getDate();
   
  };

      
  console.log(getDaysInMonth(2, 2011));    // ------ Vtora zadacha -------- //

