import { Fetching } from "./Fetching";
import { api } from "./Api";
import { useEffect } from "react";


export const Api = () => {


  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
       
      }, []); //esto para que el fetch no se renderice en un loop infinito
  }); 

  return (
    <div>
      <h1>Renderizando fetching</h1>
      <ol>
        {api.map((a) => (
          <Fetching key={a.id} {...a} />
        ))}
      </ol>
    </div>
  );
};
