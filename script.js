//funcao add tarefa

function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;
    console.log(taskTitle);

    if(taskTitle){

        const template = document.querySelector('.template');
        //console.log(template);
        const newTask = template.cloneNode(true);
        //console.log(newTask);
        newTask.querySelector(".task-title").textContent = taskTitle;
        //console.log(newTask);
        newTask.classList.remove('template');
        newTask.classList.remove('hide');


        const list = document.querySelector('#task-list');

        list.appendChild(newTask);
        // adicionar o evento remover
        const removebtn = newTask.querySelector(".btn1").addEventListener("click", function(){
            removeTask(this);
        })
        

        const doneBtn = newTask.querySelector(".btn2").addEventListener("click", function(){
            completetask(this);
        })
        
    }


    //limpa
    document.querySelector('#task-title').value = "";

}

const addBtn = document.querySelector('#btn-add');

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log('eu cliquei no botão');
    addTask();
})

 function completetask(task){
            const taskComplete = task.parentNode;
            taskComplete.classList.toggle("done");
        }

function removeTask(task){
            task.parentNode.remove(task)

        }


