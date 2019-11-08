const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let interval
let frames = 0
let gravity = 8.9

const obstacles = []
const batsGen = []
let counter = 0
let batsPosition =[]
let image = {
  bg:"https://dl.dropboxusercontent.com/s/boygkfpdaidmh5z/bg.jpg?dl=0",
  entrada: "https://dl.dropboxusercontent.com/s/9u52ho4cegyjw4u/entrada.png?dl=0",
  entrada2:"https://dl.dropboxusercontent.com/s/moxqqp87bxx4dq2/entrada2.png?dl=0",
  dePieDer: "https://dl.dropboxusercontent.com/s/dim3s7lyl90rptp/megamanstand-right.png?dl=0",
  dePieDer2: "https://dl.dropboxusercontent.com/s/4326ooime5vuhmn/megamanstand-right-2.png?dl=0",
  dePieIzq: "https://dl.dropboxusercontent.com/s/a2ic1wtnluo8nlv/megamanstand-left.png?dl=0",
  dePieIzq2: "https://dl.dropboxusercontent.com/s/ftwc8b90p990c5f/megamanstand-left-2.png?dl=0",
  badGuy: "https://dl.dropboxusercontent.com/s/0npwf6pwh0yt7v6/badguy.png?dl=0",
  batsito: "https://dl.dropboxusercontent.com/s/mnw27xtujwfv3ld/batsito.png?dl=0",
  caminDer: "https://dl.dropboxusercontent.com/s/0jgjdlv19y0jsbh/mmx_x-right.png?dl=0",
  caminDer2: "https://dl.dropboxusercontent.com/s/5w33kww99dnfggw/mmx_x-right-2.png?dl=0",
  caminIzq: "https://dl.dropboxusercontent.com/s/x335qdq3h0qrd80/mmx_x-left.png?dl=0",
  caminIzq2: "https://dl.dropboxusercontent.com/s/7sv2kaq7t2tsuhm/mmx_x-left-2.png?dl=0",
  saltoDer: "https://dl.dropboxusercontent.com/s/bj70yrw3kqxj6eh/mmx-x-jump-right.png?dl=0",
  saltoDer2: "https://dl.dropboxusercontent.com/s/69yh932fvlupcqi/mmx-x-jump-right-2.png?dl=0",
  municion: "https://dl.dropboxusercontent.com/s/atsyyq1tak7349e/municion.png?dl=0",
  shotDer: "https://dl.dropboxusercontent.com/s/lfvnc4d50noca0y/shot-right.png?dl=0",
  shotDer2: "https://dl.dropboxusercontent.com/s/sxradfyk66kmtuz/shot-right-2.png?dl=0",
  shotIzq: "https://dl.dropboxusercontent.com/s/01schtfkomwkjkj/shot-left.png?dl=0",
  shotIzq2: "https://dl.dropboxusercontent.com/s/am3ns11vrmkj1pf/shot-left-2.png?dl=0"
}

let loose = new Audio()
loose.src = "../Audio/final.MP3"
let inicio = new Audio()
inicio.src = "../Audio/inicio.MP3"
let siempre = new Audio()
siempre.src = "../Audio/siempre.MP3"
let btnPlay = document.getElementById("jugar")
let divInst = document.getElementById("inst")


// onload = () => {
//   update()
// }

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
  if (megaMan.y <= 0) {
    megaMan.y = 0
    megaMan.capturaY = 0
  }


  
  if(megaMan2.x <= 0){
    megaMan2.x = 0
  } else if( megaMan2.x + 100 >= canvas.width){
    megaMan2.x = canvas.width  - 100
  }

  if (megaMan2.y <= 0) {
    megaMan2.y = 0
    megaMan2.capturaY = 0
  }

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
  // clearInterval(interval)
  // interval= null
  // ctx.font = '30px Arial'
  // ctx.fillStyle = 'white'
  // ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 )
  console.log("game over -- > entrando")
  if (megaMan.hp == 0 && megaMan2.hp > 0) {
    clearInterval(interval)
    // interval= null
    siempre.pause()
    loose.play()
    ctx.font = '30px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 )
    ctx.fillText('Ganador Mega Man Red', canvas.width / 2.5 , canvas.height / 2 +50 )
    console.log("ganador red")
  } else 
   if (megaMan2.hp == 0 && megaMan.hp > 0){
    clearInterval(interval)
    // interval= null
    siempre.pause()
    loose.play()
    ctx.font = '30px Arial'
    ctx.fillStyle = 'white'
    ctx.fillText('Game Over', canvas.width / 2 , canvas.height / 2 )
    ctx.fillText('Ganador Mega Man Blue', canvas.width / 2.5, canvas.height / 2 +50 )
    console.log("ganador blue")
  }


}




function drawShots() {

  obstacles.forEach(munition => munition.draw())

}




function generateBats() {
  if (frames % 150 === 0) {
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
  megaManAnimation()
  board.drawScoreRed()
  // gameOver()
  gameOver()
  board.drawScoreBlue()

  generateBats()
  drawBats()

  // siempre.play()
  // badGuyAnimation()
  megaMan.draw()
  megaMan2.draw()
  megaMan.x += megaMan.vx
  megaMan.y += megaMan.vy
  megaMan.y += gravity
  
  megaMan2.x += megaMan2.vx
  megaMan2.y += megaMan2.vy
  megaMan2.y += gravity
  drawShots()
  batsitoDead()
  checkColitions()





  
 
  

}

interval = setInterval(update, 1000/ 120)