import { useState } from 'react'
import { obtenerPocionesParametrosAction } from '../../../actions/pocionesActions'
import style from './buscador.module.css'

function Buscador({setPociones}) {
  const [parametros, setParametros] = useState('')
  const busqueda = async()=>{
    const data = await obtenerPocionesParametrosAction(parametros, parametros, parametros);
    data.pociones.length > 0 && setPociones(data.pociones);
    setParametros('');
  }

  return (
    <div className={style.buscador}>
        <input className={style.buscadorInput} type="text" name='parametros' value={parametros} onChange={({target}) => setParametros(target.value)} placeholder='Busca por nombre, descripción o categoría'/>
        <button className={style.buscadorAction} onClick={busqueda} >Buscar</button>
    </div>
  )
}

export default Buscador