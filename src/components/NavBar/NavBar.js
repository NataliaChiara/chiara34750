import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'
import logo from './Assets/logoSteam.png'


const NavBar = () => {
    return(
        <nav className='nav'>
            <div className='brand'>
                <img src={logo} className='logo'></img>
                <h1 className='tittle'>S T E A M</h1>
            </div>
            <div className='links'>
                <button className='navButton'>TIENDA</button>
                <button className='navButton'>BUSCAR</button>
                <button className='navButton'>SOPORTE</button>
                <button className='navButton2'>Iniciar sesion</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>



    )


}

export default NavBar