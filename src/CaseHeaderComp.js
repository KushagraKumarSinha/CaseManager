import './App4.css'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CaseHeaderComp(){
    return(
        <div class="DisCases">
            <Container>
                    <Row>
                        <Col><div className="TableDisplay">Id</div></Col>
                        <Col><div className="TableDisplay">Date</div></Col>
                        <Col><div className="TableDisplay">CustomerID</div></Col>
                        <Col><div className="TableDisplay">ProductID</div></Col>
                        <Col><div className="TableDisplay">Description</div></Col>
                        <Col><div className="TableDisplay">CaseStatus</div></Col>
                        <Col><div className="TableDisplay">SerialNo</div></Col>
                        <Col><div className="TableDisplay">Warrenty</div></Col>
                        <Col><div className="TableDisplay"></div></Col>
                    </Row>
                </Container>
        </div>
    )
}

export default CaseHeaderComp;