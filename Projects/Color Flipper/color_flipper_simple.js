const colors = ["gold", "green", "rgba(133,155,240)", "#f15035"];
const button= document.querySelector('#btn');
const color= document.querySelector('.color');
const Title= document.querySelector('.title');

button.addEventListener('click', ()=>{
    /* Get random Numbers */
    const randomNum= getRandomNum();
    let colorChosen= colors[randomNum];
    color.innerText= colorChosen;
    document.body.style.backgroundColor = colorChosen;
    Title.style.color= colorChosen;
});

function getRandomNum(){
    return Math.floor(Math.random()*colors.length);
}




console.log(' Project Done By: Myilvaganan S--> myilsmp@gmail.com --> https://github.com/Myilvaganan?tab=repositories');