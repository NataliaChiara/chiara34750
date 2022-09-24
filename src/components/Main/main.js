import './main.css'
import Categories from "./Categories/Categories";
import Product from './Product/Product';

const Main = () => {
    return (
        <div className="main">
        <Categories />
        <Product />
        </div>
    )
}

export default Main