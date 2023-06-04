import axios from 'axios'

const HostServer = 'http://localhost:4000/api/';

// Api pociones    obtener-pociones-por-parametros?nombre=Calmante&descripcion&cantidad
export const getPociones = () => axios.get(`${HostServer}obtener-pociones`);
export const getPocionesPorParametros = (nombre, descripcion, cantidad) => axios.get(`${HostServer}obtener-pociones-por-parametros?nombre=${nombre}&descripcion=${descripcion}&cantidad=${cantidad}`);
export const crearPocion = (datos) => axios.post(`${HostServer}crear-pocion`, datos);
export const actualizarPocion = () => axios.get(`${HostServer}actualizar-pocion`);
export const eliminarPocion = () => axios.get(`${HostServer}eliminar-pocion`);


// Api ingredientes
export const crearIngredientes = (datos) => axios.post(`${HostServer}crear-ingredientes`, datos);
export const getAllIngredientes = () => axios.get(`${HostServer}obtener-ingredientes`);

