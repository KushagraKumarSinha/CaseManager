import axios from "axios";
import 'bulma/css/bulma.css'
import { useState } from "react";
import './App.css'

function App(){

    const[name, setName] = useState(""); // For accepting the Name of the user
    const[address, setAddress] = useState(""); // For accepting the Address of the user 
    const[mobile, setMobile] = useState(""); // For accepting the Mobile nuber of the user

    const[showError, setShowError] = useState(false); // Used for Displaying the Error Message
    const[showSuccess, setShowSuccess] = useState(false); // Used for Displaying the Success Message

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const handleNameChange = (event) => {
        setShowError(false);
        setShowSuccess(false);
        setName(event.target.value) // Taking Name input
    }

    const handleAddressChange = (event) => {
        setShowError(false);
        setShowSuccess(false);
        setAddress(event.target.value) // Taking Address input
    }

    const handleMobileChange = (event) => {
        setShowError(false);
        setShowSuccess(false);
        setMobile(event.target.value) // Taking Mobile input
    }

    const handleInputChange = async () => {

        if(name === "" || address === "" || mobile === "")
        {
            setShowError(true); // Displaying Error Message
        }
        else
        {
            setShowSuccess(true); // Displaying Error Message
            const response = await axios.post("http://127.0.0.1:8000/AddCustomer", { // The POST request

                CustomerCode:12345, // Inserting Code
                CustomerName:name, // Inserting Name
                CusAddress:address, // Inserting Address
                CusMobile:mobile // Inserting Mobile Number
            });

            setName(""); // Value Reset
            setMobile(""); // Value Reset
            setAddress(""); // Value Reset

        }
    
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return(
        <div className="AllHolder">
            <center><div className="title">ENTER CUSTOMER DETAILS</div></center>

            {showError && <center><div className='ErrorMessage'>ERROR: Fill All Fields Before Adding Customer</div></center>}

            {showSuccess && <center><div className='SuccessMessage'>SUCCESS: Customer Added</div></center>}


            <center>
                <div>
                    <div className="NameInput"><input placeholder="Name" onChange={handleNameChange}/></div>
                    <div className="AddressInput"><input placeholder="Address" onChange={handleAddressChange}/></div>
                    <div className="MobileInput"><input placeholder="Mobile" onChange={handleMobileChange}/></div>
                </div>
                <div className="ClickerButton"><button class="button is-success" onClick={handleInputChange}>SAVE INFO</button></div>
            </center>
        </div>
    )
}

export default App;