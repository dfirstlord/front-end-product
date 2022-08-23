import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {Label} from "semantic-ui-react";

const EditProduct = () => {
    const [fund_name, setFundName] = useState("");
    const [fund_code, setFundCode] = useState("");
    const [totalMinimalSubscribe, setMinSubs] = useState("");
    const [totalMinimalTopup, setMinTopUp] = useState("");
    const [fundFactSheet_id, setFsId] = useState("");
    const [fundFactSheetUrl, setFsUrl] = useState("");
    const [prospectus_id, setProsId] = useState("");
    const [prospectusUrl, setProsUrl] = useState("");
    const [allocation_stock, setAllocStock] = useState("");
    const [allocation_forex, setAllocForex] = useState("");
    const [allocation_obligation, setAllocObligation] = useState("");
    const [prefix, setPrefix] = useState("");
    const [updatedTime, setUpdatedTime] = useState()
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
                totalMinimalSubscribe,
                totalMinimalTopup,
                fundFactSheet_id,
                fundFactSheetUrl,
                prospectus_id,
                prospectusUrl,
                allocation_stock,
                allocation_forex,
                allocation_obligation,
                prefix

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
        setMinSubs(response.data.totalMinimalSubscribe)
        setMinTopUp(response.data.totalMinimalTopup)
        setFsId(response.data.fundFactSheet_id )
        setFsUrl(response.data.fundFactSheetUrl )
        setProsId(response.data.prospectus_id )
        setProsUrl(response.data.prospectusUrl)
        setAllocStock(response.data.allocation_stock)
        setAllocForex(response.data.allocation_forex)
        setAllocObligation(response.data.allocation_obligation)
        setPrefix(response.data.prefix)
        setUpdatedTime(response.data.updatedTime)
    };

    return (
        <div >
            <div>
                <form onSubmit={updateProduct}>
                    <div>
                        <label>Fund Name</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={fund_name}
                                onChange={(e) => setFundName(e.target.value)}
                                placeholder="Fund Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Fund Code</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={fund_code}
                                onChange={(e) => setFundCode(e.target.value)}
                                placeholder="Fund Code"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Total Minimal Subscribe</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={totalMinimalSubscribe}
                                onChange={(e) => setMinSubs(e.target.value)}
                                placeholder="Total Minimal Subscribe"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Total Minimal Top Up</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={totalMinimalTopup}
                                onChange={(e) => setMinTopUp(e.target.value)}
                                placeholder="Total Minimal Top Up"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Fund Fact Sheet ID</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={fundFactSheet_id}
                                onChange={(e) => setFsId(e.target.value)}
                                placeholder="Fund Fact Sheet ID"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Fund Fact Sheet URL</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={fundFactSheetUrl}
                                onChange={(e) => setFsUrl(e.target.value)}
                                placeholder="Fund Fact Sheet URL"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Prospectus ID</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={prospectus_id}
                                onChange={(e) => setProsId(e.target.value)}
                                placeholder="Prospectus ID"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Prospectus URL</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={prospectusUrl}
                                onChange={(e) => setProsUrl(e.target.value)}
                                placeholder="Prospectus URL"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Allocation for Stock</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={allocation_stock}
                                onChange={(e) => setAllocStock(e.target.value)}
                                placeholder="Allocation for Stock"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Allocation for Forex</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={allocation_forex}
                                onChange={(e) => setAllocForex(e.target.value)}
                                placeholder="Allocation for Forex"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Allocation for Obligation</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={allocation_obligation}
                                onChange={(e) => setAllocObligation(e.target.value)}
                                placeholder="Allocation for Obligation"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Prefix</label>
                        <div>
                            <input
                                type="text"
                                className="input"
                                value={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                                placeholder="Prefix"
                            />
                        </div>
                    </div>
                    <div>
                        <Label>Last Updated : {updatedTime}</Label>
                    </div>
                    <div>
                        <button type="submit">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;