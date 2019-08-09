import React from 'react'

import { Badge, Product, ProductDetails, Section, SmallIcon } from "./Basic"
import TalkingCode from "./Icons/TalkingCode"

const Podcasts = () => (
  <Section>
    <h3>Podcasts</h3>
    <div>
      <Product>
        <SmallIcon>
          <a href="http://www.talkingcode.com">
            <TalkingCode />
          </a>
        </SmallIcon>
        <ProductDetails>
          <Badge block>Past</Badge>
          <p>
            I co-hosted <a href="http://www.talkingcode.com/">Talking Code</a>{" "}
            with Venkat Dinavahi, where we played dumb on technical topics to
            help newbies better understand them.
          </p>
        </ProductDetails>
      </Product>
    </div>
  </Section>
)

export default Podcasts