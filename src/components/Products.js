import React from "react"

import { Badge, Product, ProductDetails, Section, SmallIcon } from "./Basic"
import Sift from "./Icons/Sift"

const Products = () => (
  <Section>
    <h3>Products</h3>
    <div>
      <Product>
        <SmallIcon>
          <a href="https://hellosift.com">
            <Sift />
          </a>
        </SmallIcon>
        <ProductDetails>
          <Badge block now>Now</Badge>
          <p>
            <a href="https://hellosift.com">Sift</a> is a customer development
            tool that helps you find and keep product market fit.
          </p>
        </ProductDetails>
      </Product>
    </div>
  </Section>
)

export default Products
