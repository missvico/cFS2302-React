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
        event.preventDefault()
        setTasks([...tasks, inputTask]) //spread operator
        setInputTask("")
    }



    return(
        <section>
            <h1>To Do List</h1>
            <AddTask handleChange={handleChange} handleClick={handleClick} inputTask={inputTask}/>
            <ul className="list-group">
                {
                    tasks.map((task,index) => <Task task={task} index={index}/>)
                }
            </ul>
        </section>
    )
};

export default ToDoList;