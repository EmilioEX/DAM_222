//Creamos las respectivas funciones

//Similar a un CRUD, tenemos que poder manejar el almacenamiento,
//Es por ello que necesitamos un "set", "get" y un "delete"

//En la investigación vimos que el localStorage almacena datos a a través de una clave-valor
//Además de que solo puede almacenar cadenas de texto guiño guiño ^_^
export const guardarDatos=async(clave,valor)=>{
    window.localStorage.setItem(clave, JSON.stringify(valor));
};

export const obtenerDatos=async(clave)=>{
    const dato=window.localStorage.getItem(clave);
    return dato ?JSON.parse(dato):null;
};

export const eliminarDatos=async(clave)=>{
    window.localStorage.removeItem(clave);
};
