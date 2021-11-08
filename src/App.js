import './App.css';
import Mensaje from './Mensaje.js';
const Description = () => {
  return(
    <p>Esta es la app del curso FullStack</p>
  )
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message="Estamos trabajando"/>
      <Mensaje color='blue' message="En un curso"/>
      <Mensaje color='yellow' message="De React"/>
      <Description/>
    </div>
  );
}

export default App;
