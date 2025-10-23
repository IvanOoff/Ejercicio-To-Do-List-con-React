import { useState } from 'react'
import './FormToDo.css'

export default function FormToDo({ onAddToDo }) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim() !== '') {
            const newTask = {    
                id: Date.now(),           
                text: inputValue,   
                completed: false
            }
            onAddToDo(newTask)
            setInputValue('')
        }
    }

    return( 
        <form className='form-todo' onSubmit={handleSubmit}>
            <input
                className='input-todo'
                type='text'
                placeholder="Escriba una tarea"
                name="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='button-todo' type='submit'>
                Añadir tarea
            </button>
        </form>
    );
}