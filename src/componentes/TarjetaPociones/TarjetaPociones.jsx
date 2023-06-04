import style from './TarjetaPociones.module.css'

function TarjetaPociones({nombre, descripcion, precio, cantidad, categoria, ingredientes}) {
  return (
    <div className={style.tarjetapociones}>
        <div className={style.imagenPocion}>
            <img src="https://pm1.aminoapps.com/6733/cf8e5e33d8f0e18aa148d3353c07b5d13cafc922v2_hq.jpg" alt="" />
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
    )
    
}

export default TarjetaPociones