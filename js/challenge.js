let seconds = 0;
let minutes = 0;
let hours = 0 ;


function stopWatch(){
  
  
  if (seconds / 60 === 1){
    seconds = 0 ;
    minutes++ ;
  
  if (minutes / 60 === 1){
    minutes = 0;
    hours++
  }
  }
  
  document.getElementById("counter").innerHTML() 
}