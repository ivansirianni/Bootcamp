import "./App.css";
import { Api } from "./components/Api.jsx";
import {Colection} from "./components/Colecciones";
import {Contador} from "./components/Counter";
import {Estados} from "./components/EstadosComplejos";
import { Fetching } from "./components/Fetching";
import { Form } from "./components/Form";




export const App = () => {
  

  return (
    <div>
      <Form />      
    </div>
  );
};

export default App;
//1- paso course como prop, y como dentro de app tengo la const course, en la prop del componente la encierro con llaves
//en este caso utilice los componentes aca pero deberian estar cada uno por separado.
//asi quedaria el ejercicio final