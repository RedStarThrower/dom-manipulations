document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  window.alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var text = document.querySelector('#compoundInvestment')
  console.log("text")
  text.innerHTML = text.innerHTML * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector("#circle-bw")
  if (circle.style.background === "black") {
  	circle.style.background = "white"
  	}
  	else {
  		circle.style.background = "black"
  	}	

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
   var redCirc = document.querySelector('.circle-red')
   var redCircStyles = window.getComputedStyle(redCirc)
   var oldWidth = parseInt(redCircStyles.width)
   var oldHeight = parseInt(redCircStyles.height)
   redCirc.style.width = (oldWidth*2) + 'px'
   redCirc.style.height = (oldHeight*2) + 'px'
     if (oldWidth >= 320 && oldHeight >= 320){
       redCirc.style.width = '40px'
       redCirc.style.height = '40px'
     }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})