import { useState } from 'react';
import './ListToDo.css';
import FormToDo from './FormToDo';
import ToDo from './ToDo';

export default function ListToDo(){
    const [tasks, setTasks] = useState([]);

        const addTask = (task) => {
        if (task.text.trim()) {
            task.text = task.text.trim();

            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
    }
        const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    const completeTask = (id) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id){ task.completed = !task.completed }
            return task;
    });
            setTasks(updatedTasks);
    };

    return(
        <div className='list-todo-container'>
            <h1>Mis Tareas</h1>
            
            <FormToDo onAddToDo={addTask} />
            
            <div className='tasks-list-container'>
                {
                    tasks.map((task) =>
                        <ToDo
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            deleteToDo={deleteTask}
                            completeToDo={completeTask}
                        />
                    )
                }
            </div>
        </div>
    );
}