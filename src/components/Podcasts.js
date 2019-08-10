import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Badge, Product, ProductDetails, Section, SmallIcon } from "./Basic"
import TalkingCode from "./Icons/TalkingCode"

const Podcasts = () => (
  <Section>
    <h3>Podcasts</h3>
    <div>
      <Product>
        <SmallIcon>
          <OutboundLink href="http://www.talkingcode.com">
            <TalkingCode />
          </OutboundLink>
        </SmallIcon>
        <ProductDetails>
          <Badge block>Past</Badge>
          <p>
            I co-hosted{" "}
            <OutboundLink href="http://www.talkingcode.com/">
              Talking Code
            </OutboundLink>{" "}
            with Venkat Dinavahi, where we played dumb on technical topics to
            help newbies better understand them.
          </p>
        </ProductDetails>
      </Product>
    </div>
  </Section>
)

export default Podcasts
