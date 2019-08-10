import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Section } from "./Basic"

const Products = () => (
  <Section>
    <h3>Say hello</h3>
    <div>
      <p>
        Follow me on{" "}
        <OutboundLink href="https://twitter.com/joshsmith">
          Twitter
        </OutboundLink>{" "}
        or email me at josh [at] hellosift.com
      </p>
    </div>
  </Section>
)

export default Products
