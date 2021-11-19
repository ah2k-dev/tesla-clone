import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online for touchless deliver"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
                backgroundImg="model-s.jpg"
            />
            <Section
                title="Model Y"
                description="Order online for touchless deliver"
                backgroundImg="model-y.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order online for touchless deliver"
                backgroundImg="model-3.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order online for touchless deliver"
                backgroundImg="model-x.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panel"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtn="Order Now"
                rightBtn="Learn More"
            />
            <Section
                title="Solar for new roofs"
                description="Solar roofs costs less than a new roof plus solar panels"
                backgroundImg="solar-roof.jpg"
                leftBtn="Order Now"
                rightBtn="Learn More"
            />
            <Section
                title="Accesssories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtn="Order Now"
            />
        </Container>
    )
}


export default Home

const Container = styled.div`
    height: 100vh;

`