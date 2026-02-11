import {useState} from "react";

// Exercício 1
const Greeting = ({name}) => {
    return (<h1>Olá, {name}!</h1>);
};

// Exercício 2
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Vc clicou {count}, vezes no botão!</p>
            <button onClick={()=>{setCount(count + 1)}}>Clique em mim!</button>
            <button onClick={()=>{ count > 0 ? setCount(count - 1) : setCount(0)}}>Decrementar!</button>
        </div>
    );
};

// Exercício 3
const TaskList = ({tasks}) => {
    if(tasks.length === 0) {
        return <p>Não há tarefas para mostrar!</p>
    }

    return(
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
            ))}
        </ul>
    );
};

function Exercises() {
    const tasks = [
        { id: 1, text: "Comprar leite" },
        { id: 2, text: "Estudar React" },
    ];
    return (
        <div>
            <h2>Exercício 1</h2>
            <Greeting name = 'Albertino Neto'/>
            <h2>Exercício 2</h2>
            <Counter />
            <h2>Exercício 3</h2>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Exercises;