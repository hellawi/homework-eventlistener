const numbers = document.getElementsByTagName('div');

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", changeBgC);
}

let TF = true;

function changeBgC(){
    if(TF){
        TF = !true;
        this.style.background = 'red';
    } else {
        TF = !false;
        this.style.background = 'green';
    }
}