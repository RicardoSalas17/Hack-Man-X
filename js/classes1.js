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
    bg:"https://drive.google.com/open?id=1US8WDk5mOqr8vi1XsZRbaX6CGK2UUbF-",
    entrada: "https://drive.google.com/open?id=1Fy4OnC78ieuce5n9T1rJT_Orq8wcho4a",
    entrada2:"https://drive.google.com/open?id=1ouuLBsOTKvbyURLvXSmlu1o082gDP_s-",
    dePieDer: "https://drive.google.com/open?id=1nHTDDCCIldHg7OaFYR003xaHrMoJe8WP",
    dePieDer2: "https://drive.google.com/open?id=1z79MaFsoZLaFK1TdlBMZmntS4q0ErCZR",
    dePieIzq: "https://drive.google.com/open?id=10H0Oyn3SrT6x04qii-FAU9993FmK-DSO",
    dePieIzq2: "https://drive.google.com/open?id=18tC4CvnNz778cpEJhprPeOMcEjFq5FdG",
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
    //    this.img.src= 'https://image.freepik.com/vector-gratis/codigo-binario-fondo-negro_1302-11246.jpg'
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
      this.img1 = new Image()
      this.img1.src = '../Images/entrada.png'
      this.img2 = new Image()
      this.img2.src= '../Images/megamanstand-right.png'
      this.img12 = new Image()
      this.img12.src = '../Images/entrada.png'
      this.img22 = new Image()
      this.img22.src= '../Images/megamanstand-right.png'
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      if (this.y > canvas.height - this.height) {

        this.y = canvas.height - this.height
        this.capturaY =  canvas.height - this.height
        // this.stand()
        
      } 
    
      else {
        this.vy++
        
      }
      ctx.drawImage(
        this.img,
        (this.animate * 1400) / 14,
        this.position,
        1400 / 14,
        100,
        this.x,
        this.y,
        this.width,
        this.height
        )
        

      
    }

      // stand(){ 
      //   this.status= "right"
      // this.img.src = '../Images/megamanstand-right.png'
      //  this.width = 100
      // this.height = 100
      // this.y = canvas.height 
      // this.x = 8
      // this.vx = 0
      // this.vy = 0
      // this.animate = 0
      // this.position = 0
      // this.animate ++
      // }
      
      
      moveLeft() {
        this.status= "left"
        this.width = 100
        this.height = 100
        this.vx -= 1
        this.position = 1
        this.img.src = '../Images/mmx_x-left.png'
        this.animate ++

    }
    moveRight() {
      this.status= "right"
      this.width = 100
      this.height = 100
      this.vx += 1
      this.position = 1
      this.img.src = '../Images/mmx_x-right.png'
      this.animate ++

      
    }
    jump() {
      this.vy = -this.jumpStrenght
      this.width = 200
      this.height = 200
      ctx.drawImage(
        this.img,
         (this.animate * 1600) / 16,
        this.position,
        1600 / 16,
        129,
        this.x,
        canvas.height + 129,
        this.width,
        this.height
      )
       this.img.src = '../Images/mmx-x-jump-right.png'
       this.img.onload = () => {
        this.draw()
      }
      this.animate ++



      
      
    }
    shot(){
      if(this.status === "right"){
      if(frames % 1 === 0){
        const munition = new Municion ( this.x + 100 ,   this.capturaY + 20)
        obstacles.push(munition)
      }
      this.width = 100
      this.height = 100
      this.img.src = '../Images/shot-right.png'
      this.animate ++}
    
      



      if(this.status === "left"){
        if(frames % 1 === 0){
          const munition = new Municion ( this.x + 100 ,   this.capturaY + 20)
          obstacles.push(munition)
        }
        this.width = 100
        this.height = 100
        this.img.src = '../Images/shot-left.png'
        this.animate ++}
    }


    isTouching(obstacle) {

      return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
        )
    }



  }


// instancias
const board = new Board()
