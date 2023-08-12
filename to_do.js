
const add=document.querySelector('#add')

add.addEventListener('click',function(){
    const addTask=document.querySelector('.addTask')
    if(addTask.value==''){
        alert('Invalid Input')
    }
    else{
        let taskVal=addTask.value
        let newTask=document.createElement("li");
        newTask.innerHTML=`<input type="radio" name="" id="radio"> ${taskVal} <button id="checkDone">x</button>`;
        
        const checkD=newTask.querySelector('#checkDone')
        checkD.addEventListener('click',function(){
           checkD.parentElement.remove()
        },false)

        const radio=newTask.querySelector('#radio')
        radio.addEventListener('click',function(){
            radio.parentElement.classList.add("textDec")
        },false)
        let taskList=document.querySelector('.taskList')
        taskList.appendChild(newTask)
        
        
    }
    addTask.value=""
},false)



