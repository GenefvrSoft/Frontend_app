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
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const actualizarPocionAction = async () =>  {
    try {
        const { data } = await actualizarPocion();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const eliminarPocionAction = async () =>  {
    try {
        const { data } = await eliminarPocion();        
        return data;
    } catch (error) {
        console.log(error)
    }
}