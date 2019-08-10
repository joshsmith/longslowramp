import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { LargeIcon } from "./Basic"
import Avatar from "./Avatar"

const FlexDiv = styled.div`
  display: flex;
`

const IntroText = styled.div`
  margin-left: 10px;
`

const IntroWrapper = styled.div`
  margin-top: 3em;
`

const Intro = () => (
  <IntroWrapper>
    <h2>
      <span role="img" aria-label="climb">
        🧗🏻‍♂️
      </span>{" "}
      Watch me climb the long, slow SaaS ramp of death
    </h2>
    <FlexDiv>
      <LargeIcon>
        <Avatar />
      </LargeIcon>
      <IntroText>
        <p>
          <span role="img" aria-label="wave">
            👋🏻
          </span>{" "}
          Hey there, I'm Josh.
        </p>
        <p>
          Right now I'm building{" "}
          <OutboundLink href="https://hellosift.com">Sift</OutboundLink>, which
          helps products like mine find product market fit and keep it.
        </p>
      </IntroText>
    </FlexDiv>
    <p>
      If you're reading this, you're probably a bit like me: I want to learn
      everything I can from my fellow founders (and then some). Now, I hope to
      share some things with you that would have helped me along the way,
      stumbles and all.
    </p>
  </IntroWrapper>
)

export default Intro
