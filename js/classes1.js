//canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

//variables
let interval
let frames = 0
let gravity = 8.9
// const obstacles = []
const batsGen = []
let counter = 0
let batsPosition =[]
let scoere = 0
let audioBack = new Audio()
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


// Clases

// background
class Board {
    constructor() {
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      this.img = new Image()
      this.img.src= image.bg
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

  //Constructor Megaman
  class Megaman {
    constructor() {
        this.width = 100
        this.height = 100
        this.y = 0
        this.x = 8
        this.vx = 0
        this.vy = 0
        this.animate = 0
        this.position = 0
        this.jumpStrenght = 26
        this.hp = 3
        this.status= "right"
      this.imgEntrada = new Image()
      this.imgEntrada.src = image.entrada
      this.imgEntrada.width= 200
      this.imgEntrada.height = 200
      this.imgEntrada2 = new Image()
      this.imgEntrada2.src= image.entrada2
      this.imgDePieDer = new Image()
      this.imgDePieDer.src = image.dePieDer
      this.imgDePieDer2 = new Image()
      this.imgDePieDer2.src= image.dePieDer2
      this.imgDePieIzq = new Image()
      this.imgDePieIzq.src=image.dePieIzq
      this.imgDePieIzq2 = new Image()
      this.imgDePieIzq2.src=image.dePieIzq2
      this.imgCaminDer = new Image()
      this.imgCaminDer.src=image.caminDer
      this.imgCaminDer2 = new Image()
      this.imgCaminDer2.src=image.caminDer2
      this.imgCaminIzq = new Image()
      this.imgCaminIzq.src=image.caminIzq
      this.imgCaminIzq2 = new Image()
      this.imgCaminIzq2.src=image.caminIzq2
      this.imgSaltoDer = new Image()
      this.imgSaltoDer.src=image.saltoDer
      this.imgSaltoDer2 = new Image()
      this.imgSaltoDer2.src=image.saltoDer2
      this.imgShootDer = new Image()
      this.imgShootDer.src=image.shotDer
      this.imgShootDer2 = new Image()
      this.imgShootDer2.src=image.shotDer2
      this.imgShootIzq = new Image()
      this.imgShootIzq.src=image.shotIzq
      this.imgShootIzq2 = new Image()
      this.imgShootIzq2.src=image.shotIzq2

    this.imgs = [
        this.imgEntrada,
        this.imgEntrada2,
        this.imgDePieDer,
        this.imgDePieDer2,
        this.imgDePieIzq,
        this.imgDePieIzq2,
        this.imgCaminDer,
        this.imgCaminDer2,
        this.imgCaminIzq,
        this.imgCaminIzq2,
        this.imgSaltoDer,
        this.imgSaltoDer2,
        this.imgShootDer,
        this.imgShootDer2,
        this.imgShootIzq,
        this.imgShootIzq2
    ],
        

      this.imgs.onload = () => {
        this.draw()
      }
    }
    draw(){
  
            if (this.y > canvas.height - this.imgDePieDer.height ) {
                this.y = canvas.height - this.imgDePieDer.height 
              }else {
                this.vy++
              
              }
          ctx.drawImage(
              this.imgDePieDer,
              (this.animate * 1600) / 16,
              this.position,
              1600 / 16,
              100,
              this.x,
              this.y,
              this.width,
              this.height
              )
      
    
    
    }
    moveLeft() {
    this.status= "left"
    // this.width = 100
    // this.height = 100
    this.vx -= 3
    this.position = 0
    // this.imgCaminIzq
    this.animate ++
    console.log("---------khdashkjdashkjads-->", this.vx)

    }

    moveRight() {
        this.status= "right"
        this.width = 100
        this.height = 100
        this.vx += 3
        this.position = 0
        // this.imgs.src = '../Images/mmx_x-right.png'
        this.animate ++
    }

    


}



class Batsito {
    constructor(y) {
      this.x = canvas.width
      this.y = y
      this.width = 140
      this.height = 140
      this.animate =0
      this.hp = 1
      this.img = new Image()
      this.img.src = image.batsito
    }
    draw() {
      this.x--
    
      ctx.drawImage(
        this.img,
        (this.animate*440) / 11,
        0,
        440 / 11,
        60,
         this.x,
          this.y,
           this.width,
            this.height)
            
          }
    isTouching(obstacle) {
      // algo está tratando de ocupar el mismo espacio en canvas que flash
      return (
        batsPosition.x < obstacle.x + obstacle.width &&
        batsPosition.x + batsPosition.width > obstacle.x &&
        batsPosition.y < obstacle.y + obstacle.height &&
        batsPosition.y + batsPosition.height > obstacle.y
        )
        
    }
 
}
  


// instancias
const board = new Board()
const megaMan = new Megaman()
// const megaMan2 = new Megaman2()

// funciones principales



// funciones auxiliares

function megaManAnimation() {

    if (frames % 20 === 0) {
      if (megaMan.animate === 16) {
       megaMan.animate = 0
     } else {
       megaMan.animate++
     }

     console.log("frames inicio", frames)
   

    //  if(megaMan2.animate > 0){
    //    megaMan2.animate = 0
    //   }else {
    //     frames++
    //   }
    }
    
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
     console.log("ahsdñasnckans", megaMan.vx)
    frames++
    // clearCanvas()
    board.draw()

  
    // badGuyAnimation()
    megaManAnimation()
    megaMan.draw()
    megaMan.x += megaMan.vx
    megaMan.y += megaMan.vy
    megaMan.y += gravity


    // megaMan2.draw()
    // megaMan2.x += megaMan2.vx
    // megaMan2.y += megaMan2.vy
    // megaMan2.y += gravity
    // checkColitions()
  
    // badGuy.draw()
    //  badGuy.x += badGuy.vx
    //  badGuy.y += badGuy.vy
    // badGuy.y += gravity
    generateBats()
    drawBats()
    // drawShots()
    // batsitoDead()

  }
  
  interval = setInterval(update, 1000/ 120)


//   listeners

document.onkeydown = e => {
    switch (e.keyCode) {
      case 37:
        megaMan.moveLeft()
        stay = "left"
        
        return
      case 39:
        megaMan.moveRight()
        stay = "right"
        console.log("DERECHAAAAA", megaMan.vx)
        return
      case 38:
        megaMan.jump()
        return
        case 77:
            megaMan.shot()
            console.log(megaMan.status)
            console.log(megaMan.status)
          break

    //       case 90:
    //     megaMan2.moveLeft()
    //     stay2 = "left"
        
    //     return
    //   case 88:
    //     megaMan2.moveRight()
    //    stay2 = "right"
    //     return
    //   case 83:
    //     megaMan2.jump()
    //     return
    //     case 32:
    //       megaMan2.shot()
    //       console.log(megaMan2.status)
          
          
    //         return
    }
  }
  
  document.onkeyup = e => {
    megaMan.vx = 0
    megaMan.position = 0
    // megaMan2.vx = 0
    // megaMan2.position = 0

  }


