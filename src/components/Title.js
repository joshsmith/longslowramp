import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const Outer = styled.div`
  width: 100%;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: flex;
  padding: 0 1em;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
`

const TitleLink = styled(Link)`
  border-bottom: none;
  padding: 1em 0;
  text-decoration: none;

  &, &:visited {
    color: #212121;
  }

  &:active,
  &:hover {
    color: #1976D2;
  }
`

const Ramp = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 0px 40px calc(102vw - 16px);
  border-color: transparent transparent #03a9f4 transparent;
  margin-left: -2vw;
  @media only screen and (max-width: 480px) {
    border-width: 0px 0px 30px calc(102vw - 16px);
  }
`

const Words = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 900;
  width: 100%;
  margin-top: 20px;
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
      <TitleLink to="/">
        <Ramp />
        <Words>
          <Word>Long</Word>
          <Word>Slow</Word>
          <Word>Ramp</Word>
        </Words>
      </TitleLink>
    </TitleContainer>
  </Outer>
)

export default Title