import "./input.css"

const Input = (props) => {
    // let inputElement;

    // switch (props.type) {
    //     case "textArea":
    //         inputElement = (
    //             <div className="customTextArea">
    //                 {props.label ? <label className="text-capitalize">{props.label}</label> : ""}
    //                 <textarea onChange={props.changed} value={props.value} />
    //             </div>
    //         );
    //         break;
    //     case "select":
    //         inputElement = (
    //             <div className="customSelectInput">
    //                 {props.label ? <label className="text-capitalize"> {props.label} </label> : ""}
    //                 <select value={props.value} {...props} onChange={props.changed} className="form-select" aria-label="Default select example">
    //                     {props.options ? props.options.map((op) => (
    //                         <option key={op} value={op}>{op}</option>
    //                     )) : ""}
    //                 </select>
    //             </div>
    //         );
    //         break;



    //     default:
    //         inputElement = (
    //             <div className="customInput">
    //                 {props.label ? <label className="text-capitalize"> {props.label} </label> : ""}
    //                 <input onChange={props.changed} value={props.value} type={props.type}
    //                 />
    //             </div>
    //         );
    // }

    return (
        <div style={props.styles ? props.styles : null} className="customInput">
            {props.label ? <label className="text-capitalize"> {props.label} </label> : ""}
            <input placeholder={props.placeholder ? props.placeholder : ""} onChange={props.changed} value={props.value} type={props.type}
            />
        </div>
    );


}
export default Input;