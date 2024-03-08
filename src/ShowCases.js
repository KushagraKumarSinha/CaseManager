import './App4.css';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'; 



function ShowCases({id, TrDate, CustomerID, ProductID, ProDes, CaseStatus, SerialNo, WarrentyType}){

    const handleUpdateCase = async () => {
        const response = await axios.put("http://127.0.0.1:8000/UpdateCase/"+id, {

            TrDate:TrDate,
            CustomerID:CustomerID,
            ProductID:ProductID,
            ProDes:"Not Working",
            CaseStatus:"Fixed",
            SerialNo:SerialNo,
            WarrentyType:WarrentyType
        });

        window.location.reload();
    }

    return(
        <div>
            <div className='CaseHolder'>
                <Container>
                    <Row>
                        <Col>{id}</Col>
                        <Col>{TrDate}</Col>
                        <Col>{CustomerID}</Col>
                        <Col>{ProductID}</Col>
                        <Col>{ProDes}</Col>
                        <Col>{CaseStatus}</Col>
                        <Col>{SerialNo}</Col>
                        <Col>{WarrentyType}</Col>
                        <Col><button class="button is-rounded is-small is-link" onClick={handleUpdateCase}>UPDATE</button></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ShowCases;