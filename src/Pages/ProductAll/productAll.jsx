import "./productAll.css"
import Cart from "../../Components/Cart/cart"
import SelectedInput from "../../Components/SelectedInput/selectedInput"
import { useState } from "react"
const ProductAll = () => {
    const productTypes = ["one", "two", "three"]
    const shipsTypes = ["one", "two", "three"]
    const sortTypes = ["New Arival", "Price Low To Heigh", "Price Heigh To Low", "Discount"]


    // window.addEventListener('click', (e) => {
    //     if (selBox && !document.getElementById('selectedInputContainer').contains(e.target)) {
    //         setSelBox(false)
    //     }
    // });

    return (
        <div className="productAll" style={{ marginTop: "200px" }}>
            <div className="selectFormComponents">
                <SelectedInput customStyle={{ width: "32%" }} id="selectProduct" defaultValue="Select Product Type" options={productTypes} />
                <SelectedInput customStyle={{ width: "32%" }} id="shipsForm" defaultValue="Ships Form" options={shipsTypes} />
                <SelectedInput customStyle={{ width: "32%" }} id="sortBy" type="modal" defaultValue="Sort By" options={sortTypes} />
            </div>

            <div className="row customRow">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <Cart />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <Cart />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <Cart />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <Cart />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <Cart />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <Cart />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <Cart />
                </div>
            </div>

        </div>

    );
}

export default ProductAll;