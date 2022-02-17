const button = document.querySelector("button")
const select_levels = document.querySelector("#select_level")
const form = document.querySelector("#form")
const attempt = document.querySelector("#attempt")
const input = document.querySelector("#input")
const restart = document.querySelector("#restart")
const game_status = document.querySelector(".game-status")
const game_over = document.querySelector("#game_over")
const status = document.querySelector("#status")
const number_of_try_after_win = document.querySelector(".number_of_try")
const lose_sound = document.querySelector('#lose-sound-effect')
const number_was = document.querySelector(".number_was")
var attempts_counter=3
var number = Math.floor((Math.random() * 20) + 1)
attempt.textContent=attempts_counter

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    while(attempts_counter>0){
        if(input.value < number){
            attempts_counter=attempts_counter-1
            status.textContent="Less than the number";
            attempt.textContent = attempts_counter
        }
        else if(input.value > number){
            attempts_counter=attempts_counter-1
            status.textContent="Greater than the number";
            attempt.textContent = attempts_counter
        }
        else{
            game_over.classList.add('show')
            status.textContent="";
            number_of_try_after_win.classList.add("show")
            game_status.textContent="congratulations! 🎉"
            if(select_levels.value=='1-20'){
                if(attempts_counter==3){number_of_try_after_win.textContent="You won this in first attempt"}
                if(attempts_counter==2){number_of_try_after_win.textContent="You won this in second attempt"}
                if(attempts_counter==1){number_of_try_after_win.textContent="You won this in third attempt"}
            }
            else if(select_levels.value=='1-50'){
                if(attempts_counter==5){number_of_try_after_win.textContent="You won this in first try"}
                if(attempts_counter==4){number_of_try_after_win.textContent="You won this in second attempt"}
                if(attempts_counter==3){number_of_try_after_win.textContent="You won this in third attempt"}
                if(attempts_counter==2){number_of_try_after_win.textContent="You won this in fourth attempt"}
                if(attempts_counter==1){number_of_try_after_win.textContent="You won this in fifth attempt"}
            }
            else if(select_levels.value=='1-100'){
                if(attempts_counter==7){number_of_try_after_win.textContent="You won this in first attempt"}
                if(attempts_counter==6){number_of_try_after_win.textContent="You won this in second attempt"}
                if(attempts_counter==5){number_of_try_after_win.textContent="You won this in third attempt"}
                if(attempts_counter==4){number_of_try_after_win.textContent="You won this in fourth attempt"}
                if(attempts_counter==3){number_of_try_after_win.textContent="You won this in fifth attempt"}
                if(attempts_counter==2){number_of_try_after_win.textContent="You won this in sixth attempt"}
                if(attempts_counter==1){number_of_try_after_win.textContent="You won this in seventh attempt"}
            }
        }
        break;
    }
    if(attempts_counter==0){
        game_over.classList.add('show')
        status.textContent=""
        game_status.textContent="Loser :)"
        number_was.textContent = `Number was ${number}`
        number_was.classList.add("show")
        number_of_try_after_win.classList.remove("show")
        lose_sound.play()
    }else{
        number_was.classList.remove("show")
    }
})

select_levels.addEventListener('change',select_level)
restart.addEventListener('click',reset)

function select_level(){
    if(select_levels.value=='1-20'){
        attempts_counter=3
        number = Math.floor((Math.random() * 20) + 1)
    }
    else if(select_levels.value=='1-50'){
        attempts_counter=5
        number = Math.floor((Math.random() * 50) + 1)
    }
    else if(select_levels.value=='1-100'){
        attempts_counter=7
        number = Math.floor((Math.random() * 100) + 1)
    }
    else{return}
    attempt.textContent = attempts_counter
}

function reset(){
    if(select_levels.value=='1-20'){
        attempts_counter=3
        number = Math.floor((Math.random() * 20) + 1)
    }
    else if(select_levels.value=='1-50'){
        attempts_counter=5
        number = Math.floor((Math.random() * 50) + 1)
    }
    else if(select_levels.value=='1-100'){
        attempts_counter=7
        number = Math.floor((Math.random() * 100) + 1)
    }
    else{return}
    attempt.textContent = attempts_counter
    game_over.classList.remove('show')
}