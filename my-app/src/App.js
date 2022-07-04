import { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  CardLink,
} from "reactstrap";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [bean, setBean] = useState([]);

  const getBreeds = async () => {
    const response = await fetch("http://localhost/api/breeds");
    const data = await response.json();
    setBean(data);
  };
  useEffect(() => {
    getBreeds();
  }, []);

  console.log(bean);
  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Pampa Petshop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="">LInkedin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="container col-12">
      <div class="row">
        { bean !=='' ? bean.map((item) => (
          
    <div className="col">
            <div className="card mt-4" style={{ width: "18rem" }}>
              <img src={item.image ?? 'https://cdn2.thecatapi.com/images/BQMSld0A0.jpg'} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {item.description}
                </p>
                <CardLink href="#" className="btn btn-primary">
                  Go somewhere
                </CardLink>
              </div>
            </div>
            </div>
          )
        ) : <div>Loading...</div>
        }
      </div>
      </div>
    </div>
  );
}

export default App;
