import './App.css';
import ProductList from "./components/ProductList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditProduct from "./components/EditProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="edit/:id" element={<EditProduct/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
