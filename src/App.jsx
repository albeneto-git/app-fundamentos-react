import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect';
import Timer from './components/Timer';
import ComponenteFilho from './components/ComponenteFilho';
import ValorDoContexto from './components/ValorDoContexto';
import {MeuContextoProvider} from './contexts/MeuContexto';
import Contador from './components/Contador';
import DisplayWindowSize from './components/DisplayWindowSize';

function App() {
  return (
    <>
      {/** useEffect */}
      <ExemploUseEffect />
      <Timer />
      {/** useContext */}
      {/** aplicações de pequeno a médio porte, que precisam transferir o estado entre componentes */}
      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
      {/** useReducer */}
      {/** utilizado em estados mais complexos */}
      <Contador />
      {/** Hooks customizados */}
      <DisplayWindowSize />
    </>
  );
}

export default App
