import { useState } from "react";
import styles from "./selectedInput.module.css";

const SelectedInput = ({ defaultValue, options, type, id, customStyle }) => {
    const [selBox, setSelBox] = useState(false)
    const [inputValue, setInputValue] = useState(defaultValue)

    window.addEventListener('click', (e) => {
        if (selBox && !document.getElementById(id).contains(e.target)) {
            setSelBox(false)
        }
    });



    console.log("seldddd", selBox);
    let element;
    switch (type) {
        case "modal":
            element = (<div className={selBox ? styles.selBoxContainer + " " + styles.modalPosition : "d-none"}>
                {options ? options.map((op) => (
                    <li onClick={() => changeInputValue(op)}>{op}</li>
                )) : null}
            </div>);
            break;
        default:
            element = (<div className={selBox ? styles.selBoxContainer : "d-none"}>
                {options ? options.map((op) => (
                    <li onClick={() => changeInputValue(op)}>{op}</li>
                )) : null}
            </div>)
            break;

    }

    const changeInputValue = (op) => {
        setInputValue(op)
        setSelBox(false)
    }

    return (
        <div style={customStyle ? customStyle : null} id={id} className={styles.selectedInput}>
            <div onClick={() => setSelBox(true)} className={styles.inputContainer}>
                <input type="text" value={inputValue} placeholder="select from" />
                <span>{type === "modal" ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
            </div>
            {element}

        </div>

    );
}

export default SelectedInput;