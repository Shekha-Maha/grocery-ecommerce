import styles from "./cart.module.css"
import Button from "../Button/button"
import pic01 from "./Assest/pic01.png"

const Cart = (props) => {
    const cartObj = {
        img: pic01,
        title: "Bell Pape red",
        ammount: "1kg",
        price: 200
    }
    const icon = <i class="fas fa-plus"></i>
    return (
        <div>
            <div className={styles.cartContainer} style={props.styles}>
                <img src={cartObj.img} alt="cart" />
                <p className={styles.title}>{cartObj.title}</p>
                <p className={styles.text}>{cartObj.ammount}, <span>pricing</span></p>
                <p className={styles.price}>${cartObj.price}</p>
                <Button icon={icon} title="Add to Cart" styles={{ fontSize: "14px", height: "40px", marginTop: "50px" }} />
            </div>
        </div>
    );
}

export default Cart;