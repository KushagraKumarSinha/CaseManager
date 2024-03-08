import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import './App3.css'
import WarrentyComponent from './WarrentyComponent';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShowListC from './ShowListC';
import ShowListP from './ShowListP';
import Stack from 'react-bootstrap/Stack';


function App3(){

    const[name, setName] = useState(""); // Gets Customer name from the Child Component
    const[mobile, setMobile] = useState(""); // Gets Customer Mobile from the Child Component
    const[productName, setProductName] = useState(""); // Gets Product name from the Child Component
    const[serialNo, setSerialNo] = useState(""); // Gets Serial Number from the Child Component

    const[showCusID, setShowCusID] = useState("CUSTOMER-ID"); // This will help in Displaying the Customer-ID
    const[showProID, setShowProID] = useState("PRODUCT-ID"); // This will help in Displaying the Product-ID
    const[trDate, setTrDate] = useState(""); // This will help in getting the date

    const[getCustomers, setGetCustomers] = useState([]); // This will help in getting all the elements from the GET Customer API
    const[getProducts, setGetProducts] = useState([]); // This will help in getting all the elements from the GET Customer API

    const[show1, setShow1] = useState(false); // This is used for showing the Customer Drop-Down list
    const[show2, setShow2] = useState(false); // This is used for showing the Product Drop-Down list

    const[warr, setWarr] = useState(""); // This is used for setting the Warrenty of the Product

    const[showError, setShowError] = useState(false); // Used for Displaying the Error Message
    const[showSuccess, setShowSuccess] = useState(false); // Used for Displaying the Success Message

    console.log(trDate);


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const WarrentyValueFromChild = (val) => {
        setWarr(val); // Setting warrenty value
    }

    const CustomerNameFromChild = (val) => {
        setName(val); // Setting Customer Name from Child
    }

    const CustomerMobileFromChild = (val) => {
        setMobile(val); // Setting Customer Mobile from Child
    }

    const CustomerIDFromChild = (val) => {
        setShowCusID(val); // Setting Customer ID from Child
    }

    const ProductNameFromChild = (val) => {
        setProductName(val); // Setting Product Name from Child
    }

    const SerialNumberFromChild = (val) => {
        setSerialNo(val); // Setting Serial Number from Child
    }

    const ProductIDFromChild = (val) => {
        setShowProID(val);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const handleCustomerDisplay = async () => {
        setShowError(false);
        setShowSuccess(false);
        setShow1(!show1); // Controlling showing/hiding the Drop-Down list

        const ReturnValue = await axios.get('http://127.0.0.1:8000/ListOfCustomer'); // The GET request
        setGetCustomers(ReturnValue.data);
    }

    const ShowAllCustomers = getCustomers.map((Cus) => {
        return  <ShowListC InputVal={Cus.CustomerName} CustomerNameFromChild={CustomerNameFromChild} CustomerMobileFromChild={CustomerMobileFromChild} CustomerIDFromChild={CustomerIDFromChild} />
    });



    const handleProductDisplay = async () => {
        setShowError(false);
        setShowSuccess(false);
        setShow2(!show2); // Controlling showing/hiding the Drop-Down list

        const ReturnValue = await axios.get('http://127.0.0.1:8000/ListOfItems'); // The GET request
        setGetProducts(ReturnValue.data);
    }

    const ShowAllProducts = getProducts.map((Pro) => {
        return  <ShowListP InputVal={Pro.ProductName} ProductNameFromChild={ProductNameFromChild} SerialNumberFromChild={SerialNumberFromChild} ProductIDFromChild={ProductIDFromChild}/>
    });

    const handleDateChange = (event) => {
        setShowError(false);
        setShowSuccess(false);
        setTrDate(event.target.value); // Getting the Date from the User
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const handleSaveChange = async () => {
        if(showSuccess === true)
        {
            setShowSuccess(false);
        }


        if(trDate === "" || showCusID === "" || showProID === "" || serialNo === "" || warr === "" )
        {
            setShowError(true); // Displaying Error message
        }
        else
        {
            setShowSuccess(true); // Displaying Success message

            
            const response = await axios.post("http://127.0.0.1:8000/AddCase", {
        
                TrDate:trDate,
                CustomerID:showCusID,
                ProductID:showProID,
                ProDes:"Not Working",
                CaseStatus:"In-Progress",
                SerialNo:serialNo,
                WarrentyType:warr
            });
            

            setTrDate(""); // Value Reset
            setShowCusID("CUSTOMER-ID"); // Value Reset
            setShowProID("PRODUCT-ID"); // Value Reset
            setSerialNo(""); // Value Reset
            setWarr(""); // Value Reset
            setName(""); // Value Reset
            setMobile(""); // Value Reset
            setProductName(""); // Value Reset
            setSerialNo(""); // Valur Reset
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return(
        <div class="AllHolder">
            <center><div className='HeaderHolder'>CASE MANAGER</div></center>

            {showError && <center><div className='ErrorMessage'>ERROR: Fill All Fields Before Adding Case</div></center>}

            {showSuccess && <center><div className='SuccessMessage'>SUCCESS: Case Added</div></center>}
            
            <div className='DateField'><input placeholder='Date' type="date" onChange={handleDateChange} /></div>

            <div className='DateField'><WarrentyComponent WarrentyValueFromChild={WarrentyValueFromChild} /></div>


            <center>
            <div>
            <div className='CustomerComponent'>
                <Card style={{ width: '18rem' }}>
                    <center><div className='CardTitleHolder'>{showCusID}</div></center>
                    <center><div className='CardButton'><button class="button is-danger is-small" onClick={handleCustomerDisplay}>SHOW</button></div></center>
                    {show1 && <div>{ShowAllCustomers}</div>}
                </Card>
            </div>

            <div className='ProductComponent'>
                <Card style={{ width: '18rem' }}>
                    <center><div className='CardTitleHolder'>{showProID}</div></center>
                    <center><div className='CardButton'><button class="button is-danger is-small" onClick={handleProductDisplay}>SHOW</button></div></center>
                    {show2 && <div>{ShowAllProducts}</div>}
                </Card>
            </div>
            </div>
            </center>


            <div className='DisplayDetails'>
                <center>
                    <Card style={{ width: '18rem' }}>
                        <div>Customer Name:<div className='ShowInfo'>{name}</div></div>
                        <div>Customer Mobile:<div className='ShowInfo'>{mobile}</div></div>
                        <div>Product Name:<div className='ShowInfo'>{productName}</div></div>
                        <div>Serial Number:<div className='ShowInfo'>{serialNo}</div></div>
                        <div>Warrenty:<div className='ShowInfo'>{warr}</div></div>
                    </Card>
                </center>
            </div>

           

            <center><div class="SaveDetails"><button class="button is-success is-large" onClick={handleSaveChange}>SAVE</button></div></center>
        </div>
    )
}

export default App3;