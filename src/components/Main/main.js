import './main.css'
import Categories from "./Categories/Categories";
import ItemListContainer from "./ItemListContainer/ItemListContainer"

const Main = () => {
    return (
        <div className="main">
            <Categories />
            <ItemListContainer />
        </div>
    )
}

export default Main