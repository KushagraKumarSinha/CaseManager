import { useState } from "react";
import axios from "axios";

function ShowListC({InputVal, CustomerNameFromChild, CustomerMobileFromChild, CustomerIDFromChild}){

    const[allnames, setAllnames] = useState([]); // Used for the GET Request

    const handleReturnValue = async () => {

        CustomerNameFromChild(InputVal); // Sending the Name of the Customer back to the Parent Component

        const ReturnValue = await axios.get('http://127.0.0.1:8000/ListOfCustomer'); // The GET request
        setAllnames(ReturnValue.data);

        allnames.map((name) => {
            if(InputVal === name.CustomerName)
            {
                CustomerMobileFromChild(name.CusMobile); // Sending Customer Mobile Number back to the Parent Component
                CustomerIDFromChild(name.id); // Sending Customer ID back to the Parent Component
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

export default ShowListC;