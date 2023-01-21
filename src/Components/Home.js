import React from 'react'
import Header from './Header';
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Header />
        <Section
        title = "Model Y"
        description = "Order Online for Touchless Delivery"
        car = {true}
        backgroundImg = "model-y.jpg"
        leftBtnText = "Buy Now"
        rightBtnText = "Custom Order"
        />
        <Section
        title = "Model 3"
        description = "Schedule a Demo Drive"
        car = {true}
        backgroundImg = "model-3.jpg"
        leftBtnText = "Buy Now"
        rightBtnText = "Custom Order"
        />
        <Section
        title = "Model S"
        description = "Schedule a Demo Drive"
        car = {true}
        backgroundImg = "model-s.jpg"
        leftBtnText = "Buy Now"
        rightBtnText = "Custom Order"
        />
        <Section
        title = "Model X"
        description = "Schedule a Demo Drive"
        car = {true}
        backgroundImg = "model-x.jpg"
        leftBtnText = "Buy Now"
        rightBtnText = "Custom Order"
        />
        <Section 
        title = "Solar Panel"
        description = "Lowest Cost Solar Panel in America"
        car = {false}
        backgroundImg = "solar-panel.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
        />
        <Section 
        title = "Solar Roof"
        description = "Produce Clean Energy From Your Roof"
        car = {false}
        backgroundImg = "solar-roof.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
        />
        <Section 
        title = "Accessories"
        description = ""
        backgroundImg = "accessories.jpg"
        leftBtnText = "Shop Now"
        />
        
        
        
    </Container>
  )
}


const Container = styled.div`
    height: 100vh;
`

export default Home
