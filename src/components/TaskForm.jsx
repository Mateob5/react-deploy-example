import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

// Componente del IU: Formulario de las tareas 

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(title, description)
        createTask({
            title,
            description
        });
        setTitle("")
        setDescription("")
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-4">
                <h1 className="text-4xl underline font-bold text-white mb-5 text-center p-2">Crea tu tarea</h1>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ingresa la tarea"
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-3"
                />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Escribe la descripcion de la tarea"
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-3"
                ></textarea>
                <button
                    className="bg-indigo-500 px-8 py-1 text-white "
                >Generar</button>
            </form>
        </div>
    )
}

export default TaskForm

