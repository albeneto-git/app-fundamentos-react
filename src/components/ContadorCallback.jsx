import { useState, useCallback, memo } from "react";

// React.memo != de useMemo
// memo = memorizar componentes
// useMemo = memorizar valores

const Botao = memo(({onClick, children}) => {
    return <button onClick={onClick}>{children}</button>
});


const ContadorCallback = () => {
    const [contador, setContador] = useState(0);

    const incrementar = useCallback(() => {
        setContador((contadorAnterio) => contadorAnterio + 1);
    }, []);

    return <div>
        <p>Contagem: {contador}</p>
        <Botao onClick={incrementar}>Incrementar</Botao>
    </div>
};

export default ContadorCallback;