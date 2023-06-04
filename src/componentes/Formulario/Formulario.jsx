import { useState } from 'react'
import style from './formulario.module.css'
import { useForm } from '../../utils/useForm'
import { crearPocionAction } from '../../actions/pocionesActions'
import { crearIngredientesAction } from '../../actions/ingredientesActions'

function Formulario({setPociones, pociones, setIngredientes, ingredientes}) {
    const {values, handleInputChange, reset} = useForm({nombre: '', descripcion: '', precio: '', cantidad: '', categoria: '', imagen: '', ingredienteId: ''})
    const [tipoDeRegistro, setTipoDeRegistro] = useState('ingrediente');

    const tipoDeRegistroSeleccionado = (tipo) => setTipoDeRegistro(tipo);

    const onSubmit = (e) => {
        e.preventDefault();
        const { nombre, descripcion, cantidad } = values;
        if ( tipoDeRegistro === 'ingrediente' ) {
            crearIngredientesAction({nombre, descripcion, cantidad})
            setIngredientes([...ingredientes, {id: ingredientes?.length +1, nombre, descripcion, cantidad}])            
        } else {
            crearPocionAction(values);
            setPociones([values, ...pociones])
        }
        reset();
    }

  return (
    <div className={style.contenedor} style={{height: tipoDeRegistro === 'ingrediente' ? '280px' : '450px'}}>
        <h2>Formulario</h2>

        <div className={style.tipoDeRegistro}>
            <label htmlFor="pocion">Registrar Pocion</label>
            <input type="radio" value={'pocion'} onChange={({target}) => tipoDeRegistroSeleccionado(target.value)} name='registro' id='pocion' className={style.tipoDeRegistroInput}/>
            <label htmlFor="ingrediente">Registrar Ingrediente</label>
            <input type="radio" value={'ingrediente'} defaultChecked onChange={({target}) => tipoDeRegistroSeleccionado(target.value)} name='registro' id='ingrediente'/>
        </div>

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
            {   tipoDeRegistro === 'pocion' &&
               <>
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
               </>
            }

            <button className={style.btnForm}>Registrar</button>
        </form>
    </div>
  )
}

export default Formulario