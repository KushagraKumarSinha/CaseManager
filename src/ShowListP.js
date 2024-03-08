import { useState } from "react";
import axios from "axios";

function ShowListP({InputVal, ProductNameFromChild, SerialNumberFromChild, ProductIDFromChild}){

    const[allnames, setAllnames] = useState([]); // Used for the GET Request

    const handleReturnValue = async () => {
        ProductNameFromChild(InputVal); // Sending back the Product Name to the Parent Component

        const ReturnValue = await axios.get('http://127.0.0.1:8000/ListOfItems'); // The GET request
        setAllnames(ReturnValue.data);

        allnames.map((name) => {
            if(InputVal === name.ProductName)
            {
                SerialNumberFromChild(name.ProductCode); // Sending Customer Mobile Number back to the Parent Component
                ProductIDFromChild(name.id); // Sending Customer ID back to the Parent Component
            }
            return 1;
        });
    }

    return(
        <div>
            <button class="button is-small is-white" onClick={handleReturnValue}>{InputVal}</button>
        </div>
    )
}

export default ShowListP;