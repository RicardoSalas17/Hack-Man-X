const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let interval
let frames = 0
let gravity = 8.9
const obstacles = []
const batsGen = []
let counter = 0
let batsPosition =[]
onload = () => {
  update()
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function megaManAnimation() {
   if (frames % 40 === 0) {
     if (megaMan.animate > 0) {
      megaMan.animate = 0
    } else {
      frames++
    }
    if(megaMan2.animate > 0){
      megaMan2.animate = 0
     }else {
       frames++
     }
   }
   
}

// function badGuyAnimation() {
//   if (frames % 15 === 0) {
//     if (badGuy.animate === 15) {
//      badGuy.animate =  0
//    } else {
     
//      if(megaMan.x <= 366){
//        if (badGuy.x === 0){
//          badGuy.x = 0
//          badGuy.animate++
//        }else{
//        badGuy.x-=50
//        badGuy.animate++
//        }
//       }
//       else if(megaMan.x > 733){
//         if (badGuy.x === canvas.width  - 6400 / 16){
//           badGuy.x =canvas.width  - 6400 / 16
//           badGuy.animate++
//         }else{
//         badGuy.x+=50
//         badGuy.animate++
//         }
//       }
//       else if (megaMan.x< 733 && megaMan.x > 366) {

//          if(badGuy.x === 280){
//           badGuy.x = 280
//            badGuy.animate++
//          } else if (badGuy.x < 300){
//           badGuy.x+=50
//           badGuy.animate++
//          } else if(badGuy.x > 300 ){
//           badGuy.x-=50
//           badGuy.animate++

        
//          } 
//       }
//     }}}



function checkColitions() {
  if (megaMan.x <= 0) {
    megaMan.x = 0
  }else if (megaMan.x + 100 >= canvas.width) {
    megaMan.x = canvas.width  - 100
  } 
  // if (megaMan.y <= 0) {
  //   megaMan.y = 0
  //   megaMan.capturaY = 0
  // }


  
  if(megaMan2.x <= 0){
    megaMan2.x = 0
  } else if( megaMan2.x + 100 >= canvas.width){
    megaMan2.x = canvas.width  - 100
  }

  // if (megaMan2.y <= 0) {
  //   megaMan2.y = 0
  //   megaMan2.capturaY = 0
  // }

  // if(badGuy.x <= 0){
  //   badGuy.x = 0
  // } else if( badGuy.x + 6400 / 16 >= canvas.width){
  //   badGuy.x = canvas.width  - 6400 / 16
  // }

  obstacles.forEach((munition, i) => {
    if (batsPosition.isTouching(munition)) {
      obstacles.splice(i, 1)
      batsPosition.hp--
    }
  })


  batsGen.forEach((batsPosition, i) => {
    if (megaMan.isTouching(batsPosition )) {
      batsGen.splice(i, 1)
      megaMan.hp--
    }
  })

  batsGen.forEach((batsPosition, i) => {
    if (megaMan2.isTouching(batsPosition )) {
      batsGen.splice(i, 1)
      megaMan2.hp--
    }
  })


}
function batsitoDead() {
  if (batsPosition.hp === 0) {
    counter++
    batsPosition.height= 0
    batsPosition.hp = 1 
  }
}

function gameOver() {
  if (megaMan.hp === 0) {
    clearInterval(interval)
    ctx.font = '30px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText('Game Over', canvas.width / 2 - 30, canvas.height / 2 - 10)
  } 
   if (megaMan2.hp === 0){
    clearInterval(interval)
    ctx.font = '30px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText('Game Over', canvas.width / 2 - 30, canvas.height / 2 - 10)

  }
}




function drawShots() {
  obstacles.forEach(munition => munition.draw())
 
}




function generateBats() {
  if (frames % 250 === 0) {
    const randomPosition = Math.floor(Math.random() * canvas.height - 100) + 50
    batsPosition =  new Batsito(randomPosition)
    batsGen.push(batsPosition)
    
  }
}


function drawBats() {
  batsGen.forEach(batsPosition  => batsPosition.draw())
}





function update() {
  frames++
  clearCanvas()
  board.draw()
  generateBats()
  drawBats()
  megaManAnimation()
  // badGuyAnimation()
  megaMan.draw()
  megaMan2.draw()
  megaMan.x += megaMan.vx
  megaMan.y += megaMan.vy
  megaMan.y += gravity

  megaMan2.x += megaMan2.vx
  megaMan2.y += megaMan2.vy
  megaMan2.y += gravity
  checkColitions()

  // badGuy.draw()
  //  badGuy.x += badGuy.vx
  //  badGuy.y += badGuy.vy
  // badGuy.y += gravity

  drawShots()
  batsitoDead()
 



  
  
  
  

}

interval = setInterval(update, 1000/ 120)