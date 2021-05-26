import classes from "./productAll.module.css"
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
        <div className={classes.productAll}>
            <div className={classes.selectFormComponents}>
                <SelectedInput customStyle={{ width: "32%" }} id="selectProduct" defaultValue="Select Product Type" options={productTypes} />
                <SelectedInput customStyle={{ width: "32%" }} id="shipsForm" defaultValue="Ships Form" options={shipsTypes} />
                <SelectedInput customStyle={{ width: "32%" }} id="sortBy" defaultValue="Sort By" options={sortTypes} />
            </div>

            <div>
                <div className={classes.product_div}>

                <div className={classes.product_cart}>
                    <Cart />
                </div>
                <div className={classes.product_cart}>
                    <Cart />
                </div>
                <div className={classes.product_cart}>
                    <Cart />
                </div>
                <div className={classes.product_cart}>
                    <Cart />
                </div>
                <div className={classes.product_cart}>
                    <Cart />
                </div>
                <div className={classes.product_cart}>
                    <Cart />
                </div>
                <div className={classes.product_cart}>
                    <Cart />
                </div>
                <div className={classes.product_cart}>
                    <Cart />
                </div>
                <div className={classes.product_cart}>
                    <Cart />
                </div>
                    {/* <div className=" col-sm-6 col-md-3 col-lg-2 pt-4">
                        <Cart />
                    </div> 
                    <div className=" col-sm-6 col-md-3 col-lg-2 pt-4">
                        <Cart />
                    </div>  */}
                </div>
            </div>
        </div>

    );
}

export default ProductAll;