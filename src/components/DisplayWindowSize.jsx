import useWindowSize from "../hooks/useWindowSize"; 

const DisplayWindowSize = () => {

    const {width, heigth} = useWindowSize();

    return (<div>
        <p>A largura da janela é {width}</p>
        <p>A altura da janela é {heigth}</p>
    </div>);
}

export default DisplayWindowSize;