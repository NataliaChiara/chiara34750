import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav>
            <div>
                <h1>Smoke</h1>
            </div>
            <div>
                <button>Rocket League</button>
                <button>Sims 4</button>
                <button>Don't Starve</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>



    )


}

export default NavBar