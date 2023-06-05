import style from './TarjetaPociones.module.css';
import borrarIcon from '../../assets/borrarIcon.png';
import { eliminarPocionAction } from '../../actions/pocionesActions'
import { useState } from 'react'
import ActualizarPocion from '../ModalActualizarPocion/ActualizarPocion'
import { alertDeleteItems } from '../../utils/alert'


function TarjetaPociones({id, nombre, descripcion, ingredienteId, precio, cantidad, imagen, categoria, ingredientes, setPociones, pociones}) {
    const [openModal, setOpenModal] = useState(false)

    const btnEliminarPocion = async() => {
        const validacion = await alertDeleteItems('¿Eliminar Pocion?');
        if( validacion ) {
            await eliminarPocionAction(id);
            const excluirPocionRemovida = pociones.filter(pocion => pocion.id !== id);
            setPociones(excluirPocionRemovida);
        }        
    }

    const abrirModal = () => {
        localStorage.setItem('pocion', JSON.stringify({id, nombre, descripcion, imagen, precio, cantidad, categoria, ingredienteId}));
        setOpenModal(true);
    }

  return (
        <>  { openModal && <ActualizarPocion openModal={openModal} setOpenModal={setOpenModal} pociones={pociones} setPociones={setPociones} /> }
             <div className={style.tarjetapociones} onClick={abrirModal}>
                <div className={style.borrarIcon} onClick={ (e) => {e.stopPropagation(); btnEliminarPocion()}}>
                    <img src={borrarIcon} alt="borrarIcon" />
                </div>
                <div className={style.imagenPocion}>
                    <img src={imagen} alt="" />
                </div>
                <div className={style.infoPocion}> 
                    <div className={style.nombrePocion}><b>{nombre}</b></div>
                    <div className={style.infoPocionSubtitle}><b>Información de la poción</b></div>
                    <div className={style.descripcionPocion}>
                        <p><b>Descripcion:</b>{descripcion}</p>
                        <p><b>Precio</b>: {precio}</p>
                        <p><b>Cantidad</b>: {cantidad}</p>
                        <p><b>Categoria</b>: {categoria}</p>
                        <p><b>Ingredientes</b>: {ingredientes}</p>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default TarjetaPociones