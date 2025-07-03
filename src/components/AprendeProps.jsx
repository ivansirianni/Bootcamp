

const AprendiendoProps = (params) => {
    console.log(params)
    return(
        <h1 style={{color: params.color}}>
            {params.prop}
        </h1>
    )
}

export default AprendiendoProps

//Le paso la prop desde el componente principal App.jsx y la incorporo aca desde el parentesis donde declaro la funcion AprendiendoProps
//Cuando paso la prop es entre llaves {}, poniendo primero el param que uso en este archivo y luego el que uso en el app.jsx, en este caso prop
// mismo procedimiento para los colores como aqui figura