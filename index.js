/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet (time) {
   let hrsmintime = time.split(":");
   let hours = parseInt(hrsmintime[0]);
   if (hours < 12){
     return "Good Morning"
   }
   else if (hours >= 12 && hours < 17){
    return "Good Afternoon"
   }
   else if (hours >= 17){
     return "Good Evening"
   }
  }


function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}

// 


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
