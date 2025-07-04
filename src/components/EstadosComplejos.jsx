import { useState } from "react";
import ReactDOM from "react-dom";

//esta es una forma mas avanzada y simple de manejar los estados sin tantas lineas de codigos. Cuando son mas de 1 estado uso la forma sin comentar. Si es uno solo, uso la forma simple y luego lo otro en el onclick

const Estados = () => {
  //const [left, setLeft] = useState(0);
  //const [right, setRight] = useState(0);

  const [counter, setCounter] = useState({
    left: 0,
    right: 0,
    mensaje: "Renderizando desde las diferentes funciones",
  });

  const [clicks, setClicks] = useState([]); //aca voy a manejar la cantidad de clicks totales en la pag.

  const clickLeft = () => {
    const newCounterState = {
      ...counter, //aca mantiene todo lo que viene de counter sin que desaparezca, renderiza sin perder info. Se usa el spread operator. Por ejemplo, si hago un click, de esta forma, no se borraria de mi pantalla el mensaje. Si se agregan mas cosas arriba, no hace falta que las vuelva a agregar aca abajo.
      left: counter.left - 1,
    };
    setCounter(newCounterState);
    setClicks((prevClicks )=> [...prevClicks, "L"])
  };

  const clickRight = () => {
    setCounter(
        {
            ...counter,
            right: counter.right +1
        }
    )  ;
    setClicks((prevClicks) => [...prevClicks, "R"])   
    
  };

  return (
    <>
      <button onClick={clickLeft}>Left</button> {counter.left}
      <button onClick={clickRight}>Right</button> {counter.right}
      <h3>Click Totales {counter.clicks}</h3>
      <h2>{counter.mensaje}</h2>
      {clicks.join(", ")}
    </>
  );
};

export default Estados;
