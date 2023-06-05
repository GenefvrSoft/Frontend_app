import axios from 'axios'

const HostServer = 'http://localhost:4000/api/';

// Api pociones    obtener-pociones-por-parametros?nombre=Calmante&descripcion&cantidad
export const getPociones = () => axios.get(`${HostServer}obtener-pociones`);
export const getPocionesPorParametros = (nombre, descripcion, cantidad) => axios.get(`${HostServer}obtener-pociones-por-parametros?nombre=${nombre}&descripcion=${descripcion}&cantidad=${cantidad}`);
export const crearPocion = (datos) => axios.post(`${HostServer}crear-pocion`, datos);
export const actualizarPocion = (datos) => axios.put(`${HostServer}actualizar-pocion`, datos);
export const eliminarPocion = (id) => axios.delete(`${HostServer}eliminar-pocion/${id}`);


// Api ingredientes
export const crearIngredientes = (datos) => axios.post(`${HostServer}crear-ingredientes`, datos);
export const getAllIngredientes = () => axios.get(`${HostServer}obtener-ingredientes`);

