import { useState } from "react";

export const Contador = ({number}) => {
    console.log("Counter render")
  return <h1>{number}</h1>;
}; // en esta funcion extraigo el elemento number que muestra abajo en el contador
//---------------------------------------------------
const Counter = () => {
  const [contador, setContador] = useState(0);

  const Suma = () => {
    setContador(contador + 1);
  };
  const Resta = () => {
    setContador(contador - 1);
  };

  const Reset = () => {
    setContador(0);
  };
  const esPar = contador % 2 === 0;

  const mensajePar = esPar ? "Num Par" : "Num Impar";

  return (
    <div>
      <Contador number={contador} />
      <h3>{mensajePar}</h3>
      <button onClick={Suma}>Sumar +</button>
      <button onClick={Resta}>- Restar</button>
      <button onClick={Reset}>Resetear</button>
    </div>
  );
};


//practicamos el use state a traves de un contador