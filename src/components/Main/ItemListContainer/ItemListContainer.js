import "./ItemListContainer.css"
import Product from "./Product/Product"

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="ItemListContainer">
            <Product name={"STELLARIS"} img={"https://cdn.akamai.steamstatic.com/steam/apps/281990/hero_capsule.jpg?t=1663951819"} category={"simulacion"} />
            <Product name={"STARDEW VALLEY"} img={"https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg?t=1608624324"} category={"simulacion"} />
            <Product name={"CITIES SKYLINES"} img={"https://cdn.akamai.steamstatic.com/steam/apps/255710/hero_capsule.jpg?t=1661180351"} category={"simulacion"} />
        </div>
    )
}

export default ItemListContainer

