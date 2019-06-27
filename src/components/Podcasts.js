import React from 'react'

import { Badge, Product, ProductDetails, Section, SmallIcon } from "./Basic"
import KickingSaaS from "./Icons/KickingSaaS"
import TalkingCode from "./Icons/TalkingCode"

const Podcasts = () => (
  <Section>
    <h3>Podcasts</h3>
    <div>
      <Product>
        <SmallIcon>
          <a href="http://www.kickingsaas.fm/">
            <KickingSaaS />
          </a>
        </SmallIcon>
        <ProductDetails>
          <Badge block new>Coming Soon</Badge>
          <p>
            I will be co-hosting <strong>Kicking SaaS</strong> alongside my
            friend Joel Rendall, where we have weekly mental breakdowns together
            over our SaaS businesses.
          </p>
        </ProductDetails>
      </Product>
      <Product>
        <SmallIcon>
          <a href="http://www.talkingcode.com">
            <TalkingCode />
          </a>
        </SmallIcon>
        <ProductDetails>
          <Badge block>Retired</Badge>
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