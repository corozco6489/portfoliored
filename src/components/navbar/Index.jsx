import { NavStyles , LinkStyles } from "./NavbarElements";
import {
    Home,
    Person,
    BusinessCenter,
    Book,
    Contacts,Shop
  } from "@material-ui/icons";
const Navbar = () => {
    return (
      <>
        <NavStyles>
        <LinkStyles to="/" activeStyle>
          <Home className="icons" /> <span> Home</span>
        </LinkStyles>

        <LinkStyles to="/about" activeStyle> 
          <Person className="icons" /> <span>About</span>{" "}
        </LinkStyles>

        <LinkStyles to="/portfolio" activeStyle>
          <BusinessCenter className="icons" /> <span>Portfolio</span>{" "}
        </LinkStyles>

        <LinkStyles to="/blogs" activeStyle>
          <Book className="icons" /> <span>Courses</span>{" "}
        </LinkStyles>
        <LinkStyles to="/products" activeStyle>
          <Shop className="icons" /> <span>Products</span>{" "}
        </LinkStyles>

        <LinkStyles to="/contact" activeStyle>
          <Contacts className="icons" />
          <span>Contact</span>{" "}
        </LinkStyles>
      </NavStyles>
      </>
    );
  };
  
  export default Navbar;