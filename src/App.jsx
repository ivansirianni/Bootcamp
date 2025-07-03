import "./App.css";

// ejercicios de full stack open bootcamp
//1
const Title = ({ prop }) => {
  return <h1>{prop}</h1>;
}; // todo eso es lo mismo que esto: const Title = ({prop}) => <h1>{course}</h1>

//2
const Parte1 = ({ prop1, prop2 }) => {
  return (
    <>
      <p>{prop1} {prop2}</p>
    </>
  );
};

//3
const Parte2 = ({ prop1, prop2 }) => {
  return (
    <>
      <p>{prop1} {prop2}</p>
    </>
  );
};

//3
const Parte3 = ({ prop1, prop2 }) => {
  return (
    <>
      <p>{prop1} {prop2}</p>
    </>
  );
};
//4
const Suma = ({prop1, prop2, prop3}) => {
return (
  <p>Number of exercises {prop1 + prop2 + prop3}</p>
)

}
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Title prop={course} />
      <Parte1 prop1={part1} prop2={exercises1} />
      <Parte2 prop1 = {part2} prop2={exercises2}/>
      <Parte3 prop1 = {part3} prop2={exercises3}/>
      <Suma prop1 = {exercises1} prop2={exercises2} prop3={exercises3}/>
    </div>
  );
};

export default App;
//1- paso course como prop, y como dentro de app tengo la const course, en la prop del componente la encierro con llaves
//en este caso utilice los componentes aca pero deberian estar cada uno por separado.
//asi quedaria el ejercicio final