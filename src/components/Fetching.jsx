export const Fetching = (props) => {
  const {id, title, body= []} = props
  return (
    <>
      
      <li key={id}>
        <h4>{title}</h4>
        <p>texto del body: {body}</p>
      </li>
    </>
  );
};
