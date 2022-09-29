import "./Product.css"

const Product = ({ name, img, category }) => {
    return (
        <div className="container">
            <div className="producto">
                <div className="frame">
                    <img src={img}></img>
                </div>
                <div className="descripcion">
                    <h1>{name}</h1>
                    <h2>$1000</h2>
                    <h1>{category}</h1>
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