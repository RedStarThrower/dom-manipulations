document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  window.alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var text = document.querySelector('#compoundInvestment')
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
var inactiveShowing = true
document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userList = document.querySelector("ul#userList")
  var inactiveUsers = userList.querySelectorAll("li.inactive") 
    for (var i = 0; i < inactiveUsers.length; i++) {
    //userList.removeChild(inactiveUsers[i])
    if (inactiveShowing) { 
      inactiveUsers[i].style.display = 'none'
    }
    else {
      inactiveUsers[i].style.display = 'list-item'

      }  
  } 
  if(inactiveShowing) inactiveShowing = false
  else inactiveShowing = true
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
    var reverseSquares = function (inputArray) {
      var newArray = []
      for (var i = inputArray.length - 1; i >=0; i--) {
        newArray.push(inputArray[i])
      }
      return newArray
    }

  var squares = document.querySelectorAll(".square")
  
  var reversedSquares = reverseSquares(squares)

  var answerBox = document.querySelector("#reverse-squares .answer-box")
  answerBox.innerHTML = ""
  //console.log([answerBox]) //<= brackets give details of DOM object
  for (var i = 0; i < reversedSquares.length; i++) {
    answerBox.appendChild(reversedSquares[i])
    
    // alternatively ...
    // answerBox.innerHTML += reversedSquares[i].outerHTML
  }

 })

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

  var reverseString = function(inputString) {
  var outputString = ""
  for (var i = inputString.length -1; i >=0; i--) {
        outputString += inputString[i]
      }
      return outputString
  }

  var taskList = document.querySelector("ul#tasks")
  var tasksCollection = taskList.querySelectorAll("li")
    for (var i = 0; i < tasksCollection.length; i++) {  
    tasksCollection[i].textContent = reverseString(tasksCollection[i].textContent)
    //tasksCollection[i].textContent = tasksCollection[i].textContent.reverse()
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  
  var cityImgEl = document.querySelector("#city-img")
  var url = cityImgEl.src 
  var urlParts = url.split("/")
  var photoId = urlParts.pop()
  var currentId = parseInt(photoId)
  var newId = (currentId % 10) + 1 // <= cycle up to 10, reset to 1
  urlParts.push(newId)
  cityImgEl.src = urlParts.join("/")
})