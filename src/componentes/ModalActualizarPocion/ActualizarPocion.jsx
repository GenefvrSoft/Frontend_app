import { actualizarPocionAction } from '../../actions/pocionesActions'
import { alertSuccess } from '../../utils/alert'
import { useForm } from '../../utils/useForm'
import style from './actualizarPocion.module.css'


function ActualizarPocion({setPociones, pociones, setOpenModal}) {
    const tipoDeRegistro = ''
    document.body.style.overflow = "hidden";
    const {id, nombre, descripcion, precio, cantidad, imagen, categoria, ingredienteId} = JSON.parse(localStorage.getItem('pocion'))

    const {values, handleInputChange, reset} = useForm({id, nombre, descripcion, imagen, precio, cantidad, categoria, ingredienteId})

    const cerrarModal = () => {
        localStorage.removeItem('pocion');
        setOpenModal(false);
        document.body.style.overflow = "";
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await actualizarPocionAction(values);
        const pocionActualiza = pociones.map(pocion => pocion.id === id ? ({...values }) : pocion);
        setPociones(pocionActualiza)    
        reset();
        alertSuccess('Actualizacion exitosa')
        cerrarModal()
    }


  return (
    <div className={style.Backdrop} onClick={cerrarModal}>
        <div className={style.content} onClick={(e) => e.stopPropagation()}>
            <h3 className={style.titulo}>Actualizar Pocion</h3>
            <form className={style.form} onSubmit={onSubmit}>
            <div   className={style.group}>
                <label htmlFor="">Nombre { tipoDeRegistro === 'ingrediente' ? 'Ingredientes' : 'Pocion' }</label>
                <input type="text" name='nombre' value={values.nombre} onChange={handleInputChange} placeholder={`Nombre ${ tipoDeRegistro === 'ingrediente' ? 'Ingredientes' : 'Pocion' }`}/>
            </div>
            <div  className={style.group}>
                <label htmlFor="">Descripcion</label>
                <input type="text" name='descripcion' value={values.descripcion} onChange={handleInputChange} placeholder={'Descripcion'}/>
            </div>
            <div  className={style.group}>
                <label htmlFor="">Cantidad</label>
                <input type="text" name='cantidad' value={values.cantidad} onChange={handleInputChange} placeholder='Cantidad'/>
            </div>
            <div  className={style.group}>
                        <label htmlFor="">Precio</label>
                        <input type="text" name='precio' value={values.precio} onChange={handleInputChange} placeholder='Precio'/>
                    </div>
                    <div  className={style.group}>
                        <label htmlFor="">Link Imagen</label>
                        <input type="text" name='imagen' value={values.imagen} onChange={handleInputChange} placeholder='Link Imagen'/>
                    </div>
                    <div  className={style.group}>
                        <label htmlFor="">Categoria</label>
                        <input type="text" name='categoria' value={values.categoria} onChange={handleInputChange} placeholder='Categoria'/>
                    </div>
                    <div className={style.group}>
                        <label htmlFor="">Ingrediente ID</label>
                        <input type="text" name='ingredienteId' value={values.ingredienteId} onChange={handleInputChange} placeholder='Ingrediente ID'/>
            </div>                                       
            <div className={style.buttons}>
                <button className={`${style.btnForm} ${style.cerrar}`} onClick={cerrarModal}>Cerrar</button>
                <button className={style.btnForm} onClick={onSubmit}>Actualizar</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default ActualizarPocion