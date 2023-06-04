import { useEffect, useState } from 'react'
import style from './tablaIngredientes.module.css';
import { obtenerIngredientesAction } from '../../actions/ingredientesActions'

function TablaIngredientes({ingredientes = []}) { 

  return (
    <div className={style.contenedor}>
        <h2 className={style.titulo}>Tabla Ingredientes</h2>
        <div className={style.tabla}>
           { ingredientes.length > 0 &&
               ingredientes.map(ingrediente => (
                    <div key={ingrediente.id} className={style.tablaRow}>
                         <p><b>ID: </b>{ingrediente.id}</p>
                         <p><b>Nombre: </b>{ingrediente.nombre}</p>
                         <p><b>Descripción: </b>{ingrediente.descripcion}</p>
                         <p><b>Cantidad: </b>{ingrediente.cantidad}</p>
                    </div>
               ))
           }
          
        </div>
    </div>
  )
}

export default TablaIngredientes