

  addEventListener("keydown", function(e){
    switch (e.keyCode) {
      case 13:
        return  start()

      case 37:
        megaMan.moveLeft()
        stay = "left"
        break

      case 39:
        megaMan.moveRight()
        stay = "right"
        break

      case 38:
        megaMan.jump()
        break

        case 77:
            megaMan.shot()
          break

        case 90:
          megaMan2.moveLeft()
          stay2 = "left"
        break

      case 88:
        megaMan2.moveRight()
       stay2 = "right"
        break

      case 83:
        megaMan2.jump()
        return

      case 32:
          megaMan2.shot()
          return
            
    }
  })
      
    

// document.onkeydown = e => {
//     switch (e.keyCode) {
//       case 13:
//         return  start()

//       case 37:
//         megaMan.moveLeft()
//         stay = "left"
//         break

//       case 39:
//         megaMan.moveRight()
//         stay = "right"
//         break

//       case 38:
//         megaMan.jump()
//         break

//         case 77:
//             megaMan.shot()
//           break

//         case 90:
//           megaMan2.moveLeft()
//           stay2 = "left"
//         break

//       case 88:
//         megaMan2.moveRight()
//        stay2 = "right"
//         break

//       case 83:
//         megaMan2.jump()
//         return

//       case 32:
//           megaMan2.shot()
//           return
            
//     }
//   }
  
  document.onkeyup = e => {
    megaMan.vx = 0
    megaMan.position = 0
    megaMan2.vx = 0
    megaMan2.position = 0

  }

  btnPlay.onclick = function (){
    start()
    divInst.classList.add("ocultar")

  }


  clearCanvas()

  