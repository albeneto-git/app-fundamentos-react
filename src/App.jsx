import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect';
import Timer from './components/Timer';
import ComponenteFilho from './components/ComponenteFilho';
import ValorDoContexto from './components/ValorDoContexto';
import {MeuContextoProvider} from './contexts/MeuContexto';
import Contador from './components/Contador';
import DisplayWindowSize from './components/DisplayWindowSize';
import Container from './components/Container';
import PerfilDeUsuario from './components/PerfilDeUsuario';

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
      {/** Slots e children props */}
      <Container>
        <h1>Titulo da seção</h1>
        <p>Este é meu subtítulo</p>
      </Container>
      {/** Sincronizar o estado com props */}
      {/** prop => componente => chamada de API => resulta em um dado */}
      <PerfilDeUsuario usuarioId={1} />
      <PerfilDeUsuario usuarioId={2} />
      <PerfilDeUsuario usuarioId={3} />
    </>
  );
}

export default App
