import React, {useState} from 'react'
import styled from "styled-components"





function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
        <a>
            <img src = "/images/logo.svg" alt = ""/>
        </a>
        <Menu>
          <a href = "#">Model S</a>
          <a href = "#">Model 3</a>
          <a href = "#">Model X</a>
          <a href = "#">Model Y</a>
          <a href = "#">Solar Roof</a>
          <a href = "#">Solar Panels</a>

        </Menu>
        <RightMenu>
            <a href = "#" className = "hide">Shop</a>
            <a href = "#" className = "hide">Account</a>
            <a href = "#" className = "hide">Menu</a>
            
            <CustomMenu onClick = {()=>setMenuOpen(true)}>
              <button >Menu</button>
            </CustomMenu>
        </RightMenu>
        <BurgerNav show = {menuOpen}>
          <Wrapper>
          <Close onClick = {()=>setMenuOpen(false)}>
            <button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M10 10l4 4m0 -4l-4 4" />
  </svg></button>
          </Close>
          </Wrapper>
          <li>
            <a href = "#">Existing Inventory</a>
          </li>
          <li>
            <a href = "#">Used Inventory</a>
          </li>
          <li>
            <a href = "#">Trade-in</a>
          </li>
          <li>
            <a href = "#">Demo Drive</a>
          </li>
          <li>
            <a href = "#">Insurance</a>
          </li>
          <li>
            <a href = "#">Cybertruck</a>
          </li>
          <li>
            <a href = "#">Roadster</a>
          </li>
          <li>
            <a href = "#">Semi</a>
          </li>
          <li>
            <a href = "#">Charging</a>
          </li>
          <li>
            <a href = "#">Powerwall</a>
          </li>
          <li>
            <a href = "#">Commercial energy</a>
          </li>
          <li>
            <a href = "#">Utilities</a>
          </li>
          <li>
            <a href = "#">Find us</a>
          </li>
          <li>
            <a href = "#">Support</a>
          </li>
          <li>
            <a href = "#">Investor Relations</a>
          </li> 
        </BurgerNav>


    </Container>
  )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a{
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;

  }
  @media(max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  margin-right: 10px;
  

}



@media(max-width: 768px){
  .hide{
    display: none;
  }
}

`

const CustomMenu = styled.div`


  color: rgba(23, 26, 32, 1);
  font-weight: 700;
  font-size: 14px;
  font-family: 'Gotham', sans-serif;
  @media (min-width: 768px){
    display: none;
  }
  

button{
  border-radius: 15%;
  border-style: none;
  background: rgba(0,0,0, 0.1);
  padding: 7px 15px;
  cursor: pointer;
}
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    text-align: start;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li {
      padding: 15px 0;
      a{
        font-weight: 600;
      }
    }
`

const Close = styled.div`
    button{
      padding: 0;
      border: none;
      margin: 0;
      background-color: rgb(255, 255, 255);
      cursor: pointer;
    }
    
`

const Wrapper = styled.div`
    display: flex;
    justify-content: end;
`
