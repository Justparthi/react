import React, {useState} from "react"
import List from "./List";

function ToDo(){
    const [task, setTask] = useState(["Take Break", "Eat Food", "Water Plant"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask(){

        if(newTask.trim() !== "" ){
            setTask(t => [...t, newTask])
            setNewTask("")
        }
        
    }

    function deleteTask(index) {

        const UpdatedTask = task.filter((_, i) => i !== index);
            setTask(UpdatedTask);
    }

    function moveUp(index){

        if(index > 0){
            const UpdatedTask = [...task];
            [UpdatedTask[index], UpdatedTask[index - 1]] = 
            [UpdatedTask[index - 1], UpdatedTask[index]]

            setTask(UpdatedTask);
        }

    }

    function moveDown(index){

        if(index < task.length - 1){
            const UpdatedTask = [...task];
            [UpdatedTask[index], UpdatedTask[index + 1]] = 
            [UpdatedTask[index + 1], UpdatedTask[index]]

            setTask(UpdatedTask);
        }


    }


    return(
        <div className="to-do-list">
          <h1>To-Do-List</h1>

          <div>
            <input type="text" 
            placeholder="Enter a task..." 
            value={newTask}
            onChange={handleInputChange}
            />

<button
          className="add-button"
          onClick={addTask}>
            Add
          </button>
          </div>

         

          <ol>
            {task.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                    >
                        Delete
                    </button>

                    <button
                    className="move-button"
                    onClick={() => moveUp(index)}
                    >
                        Up
                    </button>

                    <button
                    className="move-button"
                    onClick={() => moveDown(index)}
                    >
                        Down
                    </button>

                </li>
            )}
          </ol>

        </div>
    )

}


export default ToDo