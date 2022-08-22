import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const [fund_name, setFundName] = useState("");
    const [fund_code, setFundCode] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getProductById();
    }, []);

    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/product/${id}`, {
                fund_name,
                fund_code,
            });
            console.log(response)
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:8080/product/${id}`);
        setFundName(response.data.fund_name);
        setFundCode(response.data.fund_code);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateProduct}>
                    <div className="field">
                        <label className="label">Fund Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={fund_name}
                                onChange={(e) => setFundName(e.target.value)}
                                placeholder="Fund Name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Fund Code</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={fund_code}
                                onChange={(e) => setFundCode(e.target.value)}
                                placeholder="Fund Code"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;