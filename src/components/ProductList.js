import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const ProductList = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8080/product');
        setProduct(response.data)
    }

    return (
        <div className='column mt-5 is-centered'>
            <div className='column is-half'>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                    <tr>
                        <th>Fund Code</th>
                        <th>Fund Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.fund_name}</td>
                            <td>{product.fund_code}</td>
                            <td>
                                <Link to={`edit/${product.id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ProductList