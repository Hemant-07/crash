import React from 'react'

import "../web/Styles.css"


let currdate = new Date(2023,3,18,13);
currdate = currdate.getHours();

let greeting = "";

let col = {

};



if(currdate>=4 && currdate<=12){
   greeting = "Good Morning";
   col.color ="green"
   
}
else if(currdate>=12 && currdate<=16){
  greeting = "Good Afternoon";
  col.color ="yellow"
 
}
else if(currdate>=16 && currdate<=22 ){
  greeting = "Good Evening";
  col.color ="orange"
  
}
else  if(currdate>=22 && currdate<=4){
  greeting = "Good Night";
  col.color ="black"
 
}


function Demo() {
  return (
    <div className='abc'>
      <h1 className='vip'> Hello sir, <span style={col}>{greeting} </span></h1>
    </div>
  )
}

export default Demo