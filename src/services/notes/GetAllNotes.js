import axios from "axios";

export const getAllNotes = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response);
      const { data } = response;
      return data;
    });
};
//forma con axios. Usamos data xq ahi esta la info del objeto que queremos mostrar