import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const NavStyles = styled.nav`
position: fixed;
bottom: 0;
left: 0;
right: 0;
display: flex;
z-index: 1000;
align-items: flex-end;
@media (max-width: 375px) {

}


`;

export const LinkStyles = styled(Link)`
padding: 2rem;
font-size: 2rem;
background: #1a1a1a;;
flex: 1;
color: white;
text-align: center;
transition: 0.2s linear;
text-decoration: none;
.icons {
  color: crimson;
  padding-right: 0.5rem;
  font-size: 30px;
}
span {
  text-decoration: none;
}

&:hover {
  background: crimson;
  padding-bottom: 6rem;

  .icons {
    color: white;
  }
}

@media (max-width: 768px) {
  
  span{
    display:none;
  }
  &:hover{
    padding-bottom: 2rem;
  }
}
`;