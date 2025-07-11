import { useState, useEffect } from "react";
import { Fetching } from "./Fetching";
import { getAllNotes } from "../services/notes/GetAllNotes";
import { createNotes } from "../services/notes/CreateNotes";

export const Form = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllNotes().then((n) => {
      setNotes(n);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const notesToChange = {
      title: newNote,
      body: newNote,
      userId: 1
    };
    createNotes(notesToChange)
    .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      })
      .catch((e) => {
        console.error(e);
      });
    setNewNote("");
  }; //esto para que se aloje la nota nueva en el servidor

  return (
    <>
      <h1>Notas y fetching</h1>
      {loading ? "CARGANDO LAS INFOs DEL FETCH 3 SEGUNDOS ..." : ""}

      <form onSubmit={handleClick}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
      <ol>
        {notes.map((note) => (
          <Fetching key={note.id} {...note} />
        ))}
      </ol>
    </>
  );
};
