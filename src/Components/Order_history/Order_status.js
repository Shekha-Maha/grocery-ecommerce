import React from 'react'
import classes from "./Order_history.module.css"
import Placed from './asset/order_placed.png'
import Payment from './asset/payment.png'
import Delivered from './asset/delivered.png'
import Processed from './asset/order_processed.png'
import Pickup from './asset/pickup.png'
import { Link } from 'react-router-dom'
function Order_status() {
   return (
      <>
         <div className={classes.order_history}>
               <div className={classes.order_count}>
                  <div className={classes.order_processing}>
                     <img src={Placed} alt="placed" />
                  </div>
                  <p className={classes.placement}>Order Placed</p>
               </div>

               <Link to='/' className={classes.order_count}>
                  <div className={classes.order_processing}>
                     <img src={Payment} alt="payment" />
                  </div>
                  <p className={classes.placement}>Payment Confirmed</p>
               </Link>

               <Link to='/' className={classes.order_count}>
                  <div className={classes.order_processing}>
                     <img src={Processed} alt="processed" />
                  </div>
                  <p className={classes.placement}>Order Processed</p>
               </Link>

               <Link to='/' className={classes.order_count}>
                  <div className={classes.order_processing}>
                     <img src={Pickup} alt="pickup" />
                  </div>
                  <p className={classes.placement}>Ready to Pickup</p>
               </Link>

               <Link to='/' className={classes.order_count}>
                  <div className={classes.order_processing}>
                     <img src={Delivered} alt="delivered" />
                  </div>
                     <p className={classes.placement}>Delivered</p>
               </Link>
            </div>
      </>


   )
}

export default Order_status
