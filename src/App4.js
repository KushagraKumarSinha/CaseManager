import axios from "axios";
import { useState } from "react";
import './App4.css';
import ShowCases from "./ShowCases";
import CaseHeaderComp from "./CaseHeaderComp"




function App4(){

    const[allCases, setAllCases] = useState([]); // Used to get all Cases from the API

    const handleCaseDisplay = async () => {
        const ReturnValue = await axios.get('http://127.0.0.1:8000/ListOfCase'); // The GET request
        setAllCases(ReturnValue.data);
    }

    const ShowAllCases = allCases.map((cases) => {
        return  <ShowCases id={cases.id} TrDate={cases.TrDate} CustomerID={cases.CustomerID} ProductID={cases.ProductID} ProDes={cases.ProDes} CaseStatus={cases.CaseStatus} SerialNo={cases.SerialNo} WarrentyType={cases.WarrentyType} />
    });

    return(
        <div>
            <center><div className="CaseDisplay"><button className="button is-large is-rounded is-danger" onClick={handleCaseDisplay}>SHOW ALL CASES</button></div></center>

            <CaseHeaderComp />
            
            <div>{ShowAllCases}</div>
        </div>
    )
}

export default App4;