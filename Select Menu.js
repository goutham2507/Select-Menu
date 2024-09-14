var selectField= document.getElementById('Field');
var selectText= document.getElementById('SelectText');
var options = document.getElementsByClassName('options');
var list =document.getElementById('list');
//FOR OF : Loop through values
//FOR IN : Loop through iterable object
for(option of options){
    option.onclick = function(){
        selectField.innerHTML=this.textContent;
        list.classList.toggle('hide');
    }
}
function show(){
    list.classList.toggle('hide');
}


