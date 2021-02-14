const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button= document.querySelector('#btn');
const color= document.querySelector('.color');
const Title= document.querySelector('.title');

button.addEventListener('click', ()=> {
    let hexTag= '#';
    for(let i=0; i<6; i++){
        hexTag += hex[getRandomNum()];
    }
    color.innerText= hexTag;
    document.body.style.backgroundColor = hexTag;
    Title.style.color= hexTag;

});

function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}


console.log(' Project Done By: Myilvaganan S--> myilsmp@gmail.com --> https://github.com/Myilvaganan/FULL-STACK/tree/main/Projects/Color%20Flipper');
