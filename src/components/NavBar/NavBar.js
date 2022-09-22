import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className='nav'>
            <div>
                <h1 className='tittle'>Smoke</h1>
            </div>
            <div>
                <button className='button'>Rocket League</button>
                <button className='button'>Sims 4</button>
                <button className='button'>Don't Starve</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>



    )


}

export default NavBar