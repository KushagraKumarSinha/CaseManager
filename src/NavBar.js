import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar(){
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/App"><button>CUSTOMER DETAILS</button></Nav.Link>
                        <Nav.Link href="/App3"><button>CASE MANAGER</button></Nav.Link>
                        <Nav.Link href="/App4"><button>DISPLAY CASES</button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;