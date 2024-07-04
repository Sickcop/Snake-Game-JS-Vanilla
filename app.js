const foodHTML = '<div class="food"></div>';
const food = document.createElement('div')
food.innerHTML = foodHTML
board.append(food)
food.style.gridArea =  `${Math.floor(Math.random()*10)} / ${Math.floor(Math.random()*10)}`

let maxTable = 10
let minTable = 1
let posy = 6
let posx = 6

window.addEventListener('keyup',(e)=>{

    if (e.code == 'ArrowUp'){

      let intervalId = setInterval(()=>{
        if (posy <= minTable) { 
        console.log(posy)
        clearInterval(intervalId)
      }
      else {
        console.log(posy)
        posy --
        snake.style.gridArea = `${posy} / ${posx}`
      }
      }, 200)

        
    }

    if (e.code == 'ArrowDown'){
      
      let intervalId = setInterval(()=>{
        if (posy > maxTable) { 
        console.log(posy)
        clearInterval(intervalId)
      }
      else {
        console.log(posy)
        posy ++
        snake.style.gridArea = `${posy} / ${posx}`
      }
      }, 200)

    }

    if (e.code == 'ArrowRight'){

        let intervalId = setInterval(()=>{
          if (posx > maxTable) { 
          console.log(posx)
          clearInterval(intervalId)
        }
        else {
          console.log(posx)
          posx ++
          snake.style.gridArea = `${posy} / ${posx}`
        }
        }, 200)

    }

    if (e.code == 'ArrowLeft'){

      let intervalId = setInterval(()=>{
        if (posx <= minTable) { 
        console.log(posx)
        clearInterval(intervalId)
      }
      else {
        console.log(posx)
        posx --
        snake.style.gridArea = `${posy} / ${posx}`
      }
      }, 200)

    }
    
    ;
})