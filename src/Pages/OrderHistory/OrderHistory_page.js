
import React from 'react'
import Order_details from '../../Components/Order_history/Order_details'
import Order_history from '../../Components/Order_history/Order_history'
import Order_status from '../../Components/Order_history/Order_status'

import classes from "./OrderHistory.module.css"
function OrderHistory_page() {
    return (
        <div className="mb-5 pt-2" >
            <div className={classes.order_status +" justify-content-center col-lg-12 col-md-12 col-sm-12"}>
               <Order_status />
            </div>
            
            <div className={classes.order_details + " justify-content-center col-lg-12 col-md-12 col-sm-12 pt-5"} >
                <Order_details />
            </div>
            
            <div className={classes.order_history + " justify-content-center col-lg-12 col-md-12 col-sm-12 pt-5"} >
                <div >
                    <Order_history />
                </div>
                <div className='pt-3'>
                    <Order_history />
                    
                </div>
                <div className='pt-3 pb-3'>
                    <Order_history />
                </div>  
            </div>     
        </div>
    )
}

export default OrderHistory_page
