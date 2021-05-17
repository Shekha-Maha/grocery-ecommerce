import styles from "./button.module.css"

const Button = (props) => {
    return (
        <div className={styles.customButton}>
            <button onClick={props.onCanceled ? props.onCanceled : props.onClicked} className="text-capitalize" style={props.styles}><span>{props.icon ? props.icon : ""}</span>{props.title} </button>
        </div>
    );
}
export default Button;