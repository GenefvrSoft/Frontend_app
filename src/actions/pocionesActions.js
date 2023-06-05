import { actualizarPocion, crearPocion, eliminarPocion, getPociones, getPocionesPorParametros } from "../api/servicios"



export const obtenerPocionesAction = async () =>  {
    try {
        const { data } = await getPociones();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const obtenerPocionesParametrosAction = async (nombre, descripcion, cantidad) =>  {
    try {
        const { data } = await getPocionesPorParametros(nombre, descripcion, cantidad);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const crearPocionAction = async (datos) =>  {
    try {
        const { data } = await crearPocion(datos);
        return data.pocion;
    } catch (error) {
        console.log(error)
    }
}

export const actualizarPocionAction = async (nuevaData) =>  {
    try {
        const { data } = await actualizarPocion(nuevaData);     
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const eliminarPocionAction = async (idPocion) =>  {
    try {
        const { data } = await eliminarPocion(idPocion);             
        return data;
    } catch (error) {
        console.log(error)
    }
}