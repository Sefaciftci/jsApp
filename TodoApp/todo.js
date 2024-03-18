const taskInput = document.getElementById('taskInput')
const listContainer = document.getElementById('listContainer')

const addTask = () => {
    if(taskInput.value === ''){
        alert('Task is empty')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = taskInput.value
        listContainer.append(li)
        let span = document.createElement("span")
        span.innerHTML = "sil"
        listContainer.append(span)
    }
    taskInput.value =""
} 
//delete
listContainer.addEventListener('click' , (e)=> {
    e.target.tagName === 'span';
    e.target.parentElement.remove()
})