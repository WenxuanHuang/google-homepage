import React from 'react'
import styled from 'styled-components'

// Styled component named Container

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Home = () => {
  return (
    <Container>
        <h1>Home</h1>
    </Container>
  )
}

export default Home