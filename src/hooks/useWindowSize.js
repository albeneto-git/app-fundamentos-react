import { useState, useEffect } from "react";

export default function useWindowsSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        heigth: window.innerHeight,
    });

    useEffect(() => {

        function handleResize() {
            // Função que altera os valores.
            setWindowSize(
                {
                    width : window.innerWidth,
                    heigth : window.innerHeight,
                }
            );
        }

        // evento que dispara a função.
        window.addEventListener('resize', handleResize)

        // executa para ter um valor inicial
        handleResize();

        // limpeza de memória
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return windowSize;
}