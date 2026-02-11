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

const Exercises = () => {
    return (
        <div>
            <h2>Exercício 1</h2>
            <Greeting name = 'Albertino Neto'/>
            <h2>Exercício 2</h2>
            <Counter />
        </div>
    );
};

export default Exercises;