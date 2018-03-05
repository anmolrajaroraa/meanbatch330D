window.addEventListener("load",bindEvents);
var buttons ;
function bindEvents(){
     buttons = document.querySelectorAll("button");
    for(let i =  0 ; i<buttons.length; i++){
        buttons[i].addEventListener("click",printXorZero);
       
    }
}
var isXorZero = false;
var isGameEnd = false;
function printXorZero(){
    if(this.innerHTML.trim().length==0  && !isGameEnd){
        
            this.innerHTML = isXorZero?"X":"0";
            isXorZero = !isXorZero;
            if(gameOver()){
                document.getElementsByTagName("h2")[0].innerHTML = "Game Over "+this.innerHTML+" Wins";
                 isGameEnd = true;
            }
    }
}

function gameOver(){
   return isEquals(buttons[0], buttons[1], buttons[2]) ||
    isEquals(buttons[0], buttons[3], buttons[6])
    || isEquals(buttons[0], buttons[4], buttons[8])
    ;
}
function buttonNotBlank(button){
return button.innerHTML.trim().length==0?false:true;
}
function rowNotBlank(one, two ,three){
    return buttonNotBlank(one) && buttonNotBlank(two) && buttonNotBlank(three);
}

function isEquals(one,two,three){
    if(rowNotBlank(one,two,three)){
   return one.innerHTML==two.innerHTML && one.innerHTML==three.innerHTML;
    }
    else{
        return false;
    }
}