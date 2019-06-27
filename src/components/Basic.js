import React from 'react'
import styled from "styled-components"

const BadgeInner = styled.span`
  background: ${props =>
    props.new ? "#673AB7" : props.now ? "#2196F3" : "#607d8b"};
  border-radius: 4px;
  color: white;
  font-size: 0.6em;
  font-weight: 700;
  padding: 4px 6px;
  text-transform: uppercase;
`

const Badge = props => (
  <>
    {props.block ? (
      <p style={{ marginBottom: "0.25em" }}>
        <BadgeInner {...props} />
      </p>

    ) : (
      <BadgeInner {...props} />
    )}
  </>
)

const LargeIcon = styled.div`
  min-width: 100px;
  width: 100px;
  height: 100px;
  max-width: 100px;
  border-radius: 50px;
  overflow: hidden;
`

const Product = styled.span`
  display: flex;
  font-size: 0.9em;
  margin-bottom: 1em;
`

const ProductDetails = styled.div`
  margin-left: 10px;
`

const Section = styled.div`
  margin-top: 2em;
`

const SmallIcon = styled.div`
  min-width: 70px;
  width: 70px;
  height: 70px;
  max-width: 70px;
  border-radius: 35px;
  overflow: hidden;
`

export { Badge, LargeIcon, Product, ProductDetails, Section, SmallIcon }