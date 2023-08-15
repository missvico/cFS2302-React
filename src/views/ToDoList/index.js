import AddTask from './component/AddTask'
import Task from './component/Task'
import {useState} from 'react'

function ToDoList(){
    const [inputTask, setInputTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleChange = function (event){
        setInputTask(event.target.value)
    }

    const handleClick = function(event){
        setTasks([...tasks, inputTask]) //spread operator
        setInputTask("")
    }



    return(
        <section>
            <h1>To Do List</h1>
            <AddTask handleChange={handleChange} handleClick={handleClick} inputTask={inputTask}/>
            <ul>
                {
                    tasks.map(task => <Task task={task}/>)
                }
            </ul>
        </section>
    )
};

export default ToDoList;