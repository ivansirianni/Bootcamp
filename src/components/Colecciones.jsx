import "../App.css";
import { Notes } from "./Note";
import { notes } from "./objetos";




export const Colection = () => {
  if (typeof notes === "undefined" || notes.length === 0) {
    return "No hay notas que mostrar";
  } //si el array esta vacio, muestra esto, y sino, lo mapea

  return (
    <>
      <h1>Renderizando colecciones</h1>
      <ol>
        {notes.map((note) => (
          <Notes {...note} key={note.id} />
        ))}
      </ol>
    </>
  );
};
//map siempre para arrays
//el spread operator en el map pasa todas las props del array para no armar algo muy largo. A veces no es buena practica, si solo necesito elementos especificos, mejor pasarlos individualmenrte
