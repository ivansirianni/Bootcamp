

export const Notes = (props) => {

const {id, content, color = []} = props //de esta forma puedo traer objetos dentro del otro objeto 
// llamado color


  return (
    <>
      <li key={id}>
        <p>
          <strong>{content}</strong>
        </p>
        {color.map(col => <div key={id}>
          <p>primer color del objeto: <strong>{col.uno}</strong></p>
          <p>segundo color del objeto: <strong>{col.dos}</strong></p>
        </div>)}       
      </li>
    </>
  );
};

export default Notes;
