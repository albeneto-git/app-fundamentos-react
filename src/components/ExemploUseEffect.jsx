import {useEffect, useState} from "react";

const ExemploUseEffect = () =>{
    // executar algo, baseado em algo
    // mudança de um valor, carregamento da página ou outro evento.
    const [contador, setContador] = useState(0);
    useEffect(()=>{
        document.title = `Vc clicou ${contador} vezes`;
    })

    return(
        <div>
            <p>Vc clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 1)}>Clique aqui! </button>
        </div>
    );
};

export default ExemploUseEffect;