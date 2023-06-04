import Buscador from './Buscador/Buscador'
import style from './navbar.module.css'

function Navbar({setPociones}) {
  return (
    <header className={style.nav}>
      <p className={style.tituloPagina}>BIENVENIDOS A  ALOHOMORA SHOP</p>
      <Buscador setPociones={setPociones} />
    </header>
  )
}

export default Navbar