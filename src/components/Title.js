import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  width: 100%;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
`

const Ramp = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 0px 40px calc(100vw - 16px);
  border-color: transparent transparent #03a9f4 transparent;
  @media only screen and (max-width: 480px) {
    border-width: 0px 0px 30px calc(100vw - 16px);
  }
`

const Words = styled.div`
  font-family: "Futura";
  font-weight: 700;
  color: #212121;
  width: 100%;
  margin-top: 10px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  
   @media only screen and (max-width: 250px) {
     flex-direction: row;
  }
`

const Word = styled.div`
  font-size: 1.8em;
  letter-spacing: 1em;
  margin-right: -1em;

  @media only screen and (max-width: 800px) {
    letter-spacing: 2vw;
    margin-right: -2vw;
  }

  @media only screen and (max-width: 720px) {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 480px) {
    letter-spacing: 1vw;
    margin-right: -1vw;
    font-size: 1.5em;
  }

  @media only screen and (max-width: 319px) {
    font-size: 1.25em;
    letter-spacing: 0vw;
    margin-right: 0vw;
  }

  @media only screen and (max-width: 250px) {
    font-size: 1em;
    width: 100%;
  }
`

const Title = () => (
  <Outer>
    <TitleContainer>
      <Ramp />
      <Words>
        <Word>Long</Word>
        <Word>Slow</Word>
        <Word>Ramp</Word>
      </Words>
    </TitleContainer>
  </Outer>
)

export default Title