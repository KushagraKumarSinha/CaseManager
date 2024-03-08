import { useState } from "react";

function WarrentyComponent({WarrentyValueFromChild}){

    const[show, setShow] = useState(false); // This will be used in showing the the "Yes" and "No" option for the warrenty

    const handleShowOption = () => {
        setShow(!show); // Setting the value of show to the appropriate value
    }

    const handleYesInput = () => {
        WarrentyValueFromChild("YES"); // Sending "YES" to the Parent Component
    }

    const handleNoInput = () => {
        WarrentyValueFromChild("NO"); // Sending "NO" to the Parent Component
    }

    return(
        <div>
            <button class="button is-link" onClick={handleShowOption}>Warrenty</button>
            {show && <div><button class="button is-small is-white" onClick={handleYesInput}>YES</button></div>}
            {show && <div><button class="button is-small is-white" onClick={handleNoInput}>NO</button></div>}
        </div>
    )
}


export default WarrentyComponent;