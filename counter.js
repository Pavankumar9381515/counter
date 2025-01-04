


function onDecreament(){
    let counterElement=document.getElementById('counterValue');
    let UpdateElement=counterElement.textContent;
    let PreValue=parseInt(UpdateElement)-1;
    counterElement.textContent=PreValue;
    if (PreValue<0){
        counterElement.style.color='red';}
    else if(PreValue>0){
        counterElement.style.color='green';}
    else{
        counterElement.style.color='black';
    }
}

function onReset(){
    let counterElement=document.getElementById('counterValue');
    counterElement.innerHTML=0;
    counterValue=counterElement.textContent;
    counterElement.style.color='black';



}
function onIncreament(){
    let counterElement=document.getElementById('counterValue');
    let UpdateElement=counterElement.textContent;
    let PreValue=parseInt(UpdateElement)+1;
    counterElement.textContent=PreValue;
    if (PreValue<0){
        counterElement.style.color='red';}
    else if(PreValue>0){
        counterElement.style.color='green';}
    else{
        counterElement.style.color='black';
    }
}
