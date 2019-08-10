import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Badge, Product, ProductDetails, Section, SmallIcon } from "./Basic"
import Sift from "./Icons/Sift"

const Products = () => (
  <Section>
    <h3>Products</h3>
    <div>
      <Product>
        <SmallIcon>
          <OutboundLink href="https://hellosift.com">
            <Sift />
          </OutboundLink>
        </SmallIcon>
        <ProductDetails>
          <Badge block now>
            Now
          </Badge>
          <p>
            <OutboundLink href="https://hellosift.com">Sift</OutboundLink> is a
            customer development tool that helps you find and keep product
            market fit.
          </p>
        </ProductDetails>
      </Product>
    </div>
  </Section>
)

export default Products
