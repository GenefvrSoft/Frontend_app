import imagenPocion from './assets/imagenPocion.jpg'
import style from './App.module.css'
import Navbar from './componentes/Navbar/Navbar'
import TarjetaPociones from './componentes/TarjetaPociones/TarjetaPociones'
import Formulario from './componentes/Formulario/Formulario'
import TablaIngredientes from './componentes/TablaDeIngredientes/TablaIngredientes'
import { useEffect, useState } from 'react'
import { obtenerPocionesAction } from './actions/pocionesActions'
import { obtenerIngredientesAction } from './actions/ingredientesActions'


function App() {
  const [pociones, setPociones] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    const getDataPociones = async () => {
      const data = await obtenerPocionesAction(); 
      setPociones(data.pociones);
    }
    const getDataIngredientes = async () => {
      const data = await obtenerIngredientesAction();                        
      setIngredientes(data.ingredientes)
    }

    getDataIngredientes();
    getDataPociones();    
  }, [])
  

  return (
    <>
     <Navbar setPociones={setPociones} />
     <img src={imagenPocion} className={style.imagenPrincipal} alt="Encabezado"/>
     <div className={style.contenedorPociones}>
       {
        pociones.length > 0 && 
          pociones.map(pocion => (
            <TarjetaPociones key={pocion.id} imagen={pocion.imagen} ingredienteId={pocion.ingredienteId} id={pocion.id} setPociones={setPociones} pociones={pociones}  nombre={pocion.nombre} descripcion={pocion.descripcion} precio={pocion.precio} cantidad={pocion.cantidad} categoria={pocion.categoria} ingredientes={pocion?.ingrediente?.nombre} />
          ))
       }
     </div>
      <div className={style.FormTabla}>
        <Formulario setPociones={setPociones} pociones={pociones} setIngredientes={setIngredientes} ingredientes={ingredientes}/>
        <TablaIngredientes ingredientes={ingredientes} />
      </div>
    </>
  )
}

export default App
