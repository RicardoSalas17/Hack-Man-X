class Board {
    constructor() {
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      this.img = new Image()
      this.img.src= image.bg
      // this.img.onload = () => {
      //   // this.drawScoreBlue()
      //   // this.drawScoreRed()
      //   this.draw()
      // }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    drawScoreBlue(){
      ctx.fillStyle="white";
      ctx.font="bolder 30px Avenir"
      ctx.fillText("MegaMan Blue:" + megaMan.hp, 50,60)
    }
    drawScoreRed(){
      ctx.fillStyle="white";
      ctx.font="bolder 30px Avenir"
      ctx.fillText("MegaMan Red:" + megaMan2.hp, 800,60)
    }

    // drawBatsNum(){
    //   ctx.fillStyle="white";
    //   ctx.font="bold 24px Avenir"
    //   ctx.fillText("Muertes" + counter, 50,60)
    // }
  }
  

  class Megaman {
    constructor() {
      this.status= "right"
      this.width = 100
      this.height = 100
      this.y = -canvas.height 
      this.capturaY = -canvas.height
      this.x = 8
      this.vx = 0
      this.vy = 0
      this.animate = 0
      this.position = 0
      this.jumpStrenght = 26
      this.hp = 3
 
      this.img = new Image()
      this.img.src = image.dePieDer
      // this.img.onload = () => {
      //   this.draw()
      // }
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
        this.position = 0
        this.img.src = image.caminIzq
        this.animate ++

    }
    moveRight() {
      this.status= "right"
      this.width = 100
      this.height = 100
      this.vx += 1
      this.position = 0
      this.img.src = image.caminDer
      this.animate ++

      
    }
    jump() {
      this.vy = -this.jumpStrenght
      this.width = 100
      this.height = 100
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
      //  this.img.src = image.saltoDer
      //  this.img.onload = () => {
      //   this.draw()
      // }
      this.animate ++



      
      
    }
    shot(){
      if(this.status === "right"){
      if(frames % 1 === 0){
       const munitionR = new Municion ( this.x + 100 ,   this.capturaY + 20, "right")
        obstacles.push(munitionR)
      }

      this.width = 100
      this.height = 100
      this.img.src = image.shotDer
      this.animate ++
    }
    
      



      if(this.status === "left"){
        if(frames % 1 === 0){
          const munitionL = new Municion ( this.x  ,   this.capturaY + 20, "left")
          obstacles.push(munitionL)
        }
    
        this.width = 100
        this.height = 100
        this.img.src = image.shotIzq
        this.animate ++}

        console.log("megaman status", this.status)
        // console.log("MUNICIONES --->", munition)
        console.log("OBSTACULOS", obstacles)
    }


    isTouching(obstacle) {
      // algo está tratando de ocupar el mismo espacio en canvas que flash
      return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
        )
    }



  }

  class Megaman2 {
    constructor() {
      this.status= "right"
      this.width = 100
      this.height = 100
      this.y = -canvas.height 
      this.capturaY = -canvas.height
      this.x = 8
      this.vx = 0
      this.vy = 0
      this.animate = 0
      this.position = 0
      this.jumpStrenght = 26
      this.hp = 3
 
      this.img = new Image()
      this.img.src = image.dePieDer2
      // this.img.onload = () => {
      //   this.draw()
      // }
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
        this.position = 0
        this.img.src = image.caminIzq2
        this.animate ++

    }
    moveRight() {
      this.status= "right"
      this.width = 100
      this.height = 100
      this.vx += 1
      this.position = 0
      this.img.src = image.caminDer2
      this.animate ++

      
    }
    jump() {
      this.vy = -this.jumpStrenght
      this.width = 100
      this.height = 100
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
      //  this.img.src = image.saltoDer
      //  this.img.onload = () => {
      //   this.draw()
      // }
      this.animate ++



      
      
    }
    shot(){
      if(this.status === "right"){
      if(frames % 1 === 0){
       const munitionR2 = new Municion ( this.x + 100 ,   this.capturaY + 20, "right")
        obstacles.push(munitionR2)
      }

      this.width = 100
      this.height = 100
      this.img.src = image.shotDer2
      this.animate ++
    }
    
      



      if(this.status === "left"){
        if(frames % 1 === 0){
          const munitionL2 = new Municion ( this.x  ,   this.capturaY + 20, "left")
          obstacles.push(munitionL2)
        }
    
        this.width = 100
        this.height = 100
        this.img.src = image.shotIzq2
        this.animate ++}

        console.log("megaman status", this.status)
        console.log("MUNICIONES --->", munition)
        console.log("OBSTACULOS", obstacles)
    }


    isTouching(obstacle) {
      // algo está tratando de ocupar el mismo espacio en canvas que flash
      return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
        )
    }



  }






  class BadGuy {
    constructor() {
      this.width = 300
      this.height = 300
      this.y = 90
      this.x = 200
      this.vx = 0
      this.vy = 0
      this.animate = 0
      this.position = 0
      this.hp = 20
      this.img = new Image()
      this.img.src = image.badGuy
      // this.img.onload = () => {
      //   this.draw()
      // }
    }
    draw() {
      
      ctx.drawImage(
        this.img,
        (this.animate * 6400 )/ 16,
       this.position,
       6400 / 16,
       300,
       this.x,
       this.y,
       this.width,
       this.height
      )
      
    }



  }

 class Municion {
    constructor(x , y, status) {

      this.status = status
      this.x = x
      this.y = y
      this.width = 30
      this.height = 30
      this.img = new Image()
      this.img.src = image.municion
      // this.img.onload = () => {
      //   this.draw()
      // }
    }
    draw() {
      // if(megaMan.status === "right"){
      //  if(megaMan.status === "right") {
      // this.x += 9}
      // else if(megaMan.status === "left"){
      //   this.x += 9
      // }
      // ctx.drawImage(
      // this.img,
      // this.x,
      // this.y,
      // this.width,
      // this.height)}

       if(this.status  === "right"){
      
        this.x += 9
        ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height)} 
        
        // else 
        if (this.status === "left"){
          this.x -= 9
          ctx.drawImage(
          this.img,
          this.x,
          this.y,
          this.width,
          this.height)
        }

        // if(megaMan2.status === "right"){
        //   this.status  = "right"
        // this.x += 9
        // ctx.drawImage(
        // this.img,
        // this.x,
        // this.y,
        // this.width,
        // this.height)} else{
        //   this.status = "left"
        //   this.x -= 9
        //   ctx.drawImage(
        //   this.img,
        //   this.x,
        //   this.y,
        //   this.width,
        //   this.height)
        // }

 
        // console.log("megama2222", megaMan2.status)

    //       if(megaMan.status === "left"){
    //         if(megaMan.status === "right") {
    //           this.x -= 9}
    //           else if(megaMan.status === "left"){
    //             this.x -= 9}
    //         ctx.drawImage(
    //         this.img,
    //         this.x,
    //         this.y,
    //         this.width,
    //         this.height)}

    //         if(megaMan2.status === "left"){
    //           if(megaMan2.status === "right") {
    //             this.x -= 9}
    //             else if(megaMan2.status === "left"){
    //               this.x -= 9
    //             }
    //         ctx.drawImage(
    //           this.img,
    //           this.x,
    //           this.y,
    //           this.width,
    //           this.height)}
      
    // }
  }}



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
    // isTouching(obstacle) {
    //   // algo está tratando de ocupar el mismo espacio en canvas que flash
    //   return (
    //     batsPosition.x < obstacle.x + obstacle.width &&
    //     batsPosition.x + batsPosition.width > obstacle.x &&
    //     batsPosition.y < obstacle.y + obstacle.height &&
    //     batsPosition.y + batsPosition.height > obstacle.y
    //     )
        
    // }
 
}
  
