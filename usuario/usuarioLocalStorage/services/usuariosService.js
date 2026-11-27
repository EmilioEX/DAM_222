//Bien, ahora  pasamoas a elaborar las validaciones para amecenar los datos dentro del LocalSto

//importamos las funciones que creamos anteriormente
import {guardarDatos, obtenerDatos} from '../storage/localStorage';

//clave de la sesión
const clave= 'usuarios';

//Funciones para vaalidar los datos
//son cadenas de texto guiño guiño ^_^
export const validarUsuario=(usuario)=>{
    const nombre=(usuario.nombre || '').trim();
    const edad=String(usuario.edad ?? '').trim();

    //Validaciones
    if (!nombre) return 'El nombre es obligatorio!!!!'
    if (nombre.length<2) return 'El nombre debe tener al menos dos caracteres';
    if (nombre.length>50) return 'El nombre no puede pasar de 50 caracteres';
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(nombre))
        return 'El nombre solo puede contener letras';
    if(!edad) return 'La edad es obligatoria';
    if(!/^\d+$/.test(edad)) return 'La edad debe ser un número entero positivo';
    if(Number(edad)<1 || Number(edad)>120) return 'La edad debe estar entre 1 y 120';

    return null;
};

export const obtenerUsuarios=async()=>{
    return (await obtenerDatos(clave)) || [];
}
export const obtenerUsuarioPorId=async(id)=>{
    const usuarios=await obtenerUsuarios();
    return usuarios.find((usuario)=>String(usuario.id)=== String(id)) || null;
}
export const crearUsuario=async(usuario)=>{
    const error = validarUsuario(usuario);
    if (error) throw new Error(error);

    const usuarios=await obtenerUsuarios();

    const nuevo={
        ...usuario,
        nombre: usuario.nombre.trim(),
        edad: Number(usuario.edad),
        id: Date.now().toString(),
    };
    await guardarDatos(clave, [...usuarios, nuevo]);
    return nuevo;
};

export const actualizarUsuario=async(id, datos)=>{
    const error = validarUsuario(datos);
    if (error) throw new Error(error);

    const usuarios=await obtenerUsuarios();
    const actualizados=usuarios.map((u)=>(
        String(u.id)===String(id)
            ? {...u,...datos, nombre:datos.nombre.trim(), edad:Number(datos.edad)}
            : u
    ));
    await guardarDatos(clave, actualizados)
};
export const eliminarUsuario=async (id)=>{
    const usuarios=await obtenerUsuarios();
    await guardarDatos(clave, usuarios.filter((u)=>String(u.id)!==String(id)));
}