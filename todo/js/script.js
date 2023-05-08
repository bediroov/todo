const btn =document.querySelector('button');
const input=document.querySelector('input');
const siyahi=document.querySelector('ol');

    




const check=(e)=>{
e.preventDefault();
if (!input.value) {
    alert('please enter todo task')
}else{
    const li =document.createElement('li');
siyahi.appendChild(li)
li.innerHTML=input.value;
input.value="";
li.onclick=()=>{
    if (li.style.textDecoration==='none') {
        li.style.textDecoration="line-through"
    }else{
        li.style.textDecoration='none';
    }

}
li.ondblclick=()=>{
    li.remove()
}
}
}
btn.onclick =check;


function silme() {
//     const element = document.getElementById("list");
// element.removeChild(list.firstElementChild);




const ol=document.querySelector('ol');
ol.remove()
}




 
 









