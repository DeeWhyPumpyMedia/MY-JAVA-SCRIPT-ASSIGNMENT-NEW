alert ("taiwo"); 

let btn=document.getElementById('btn');
let changeword=document.querySelector('#change'); 

btn.addEventListener('click',taiwo);

function taiwo(){
    changeword.innerHTML= "Javascript";
    changeword.style.color='black';
    changeword.style.textTransform='upperCase'
    changeword.style.fontWeight='Bold'


    btn.style.backgroundColor='orange';
    btn.style.color='black'
    btn.style.border='5px solid white';
      
}