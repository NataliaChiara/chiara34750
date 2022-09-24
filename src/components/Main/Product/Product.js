import "./Product.css"

const Product = () => {
    return (
        <div className="container">
            <div className="producto">
                <img className="productImg" src="https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg?t=1608624324"></img>
                <div className="descripcion">
                    <h1>STARDEW VALLEY</h1>
                    <h2>$1000</h2>
                    <div className="opciones">
                        <button>Agregar al carrito</button>
                        0
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product