import { crearIngredientes, getAllIngredientes,  } from "../api/servicios"


export const crearIngredientesAction = async (datos) =>  {
    try {
        const { data } = await crearIngredientes(datos);
        
        return data;
    } catch (error) {
        console.log(error)
    }
}


export const obtenerIngredientesAction = async () =>  {
    try {
        const { data } = await getAllIngredientes();
        
        return data;
    } catch (error) {
        console.log(error)
    }
}