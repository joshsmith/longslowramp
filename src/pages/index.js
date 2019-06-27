import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/Avatar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginTop: "4em" }}>
      <h2>
        <span role="img" aria-label="climb">
          🧗🏻‍♂️
        </span>{" "}
        Watch me climb the long, slow SaaS ramp of death
      </h2>
      <div style={{ display: "flex" }}>
        <div
          style={{
            minWidth: 100,
            width: 100,
            height: 100,
            maxWidth: 100,
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <Avatar />
        </div>
        <div style={{ marginLeft: "1em" }}>
          <p>
            <span role="img" aria-label="wave">
              👋🏻
            </span>{" "}
            Hey there, I'm Josh.
          </p>
          <p>
            Right now I'm building <a href="https://hellosift.com">Sift</a>,
            which helps startups like mine find product market fit – and then
            keep it.
          </p>
        </div>
      </div>
      <p>
        If you're reading this, you're probably like me: I want to learn
        everything I can from my fellow founders (and then some). Now, I hope to
        share some things with you that would've helped me along the way.
      </p>
    </div>
    <div style={{ marginTop: "2em" }}>
      <h2>Newsletter</h2>
      <p>Join other folks who are following my progress.</p>
      <div style={{ display: "flex" }}>
        <input
          type="email"
          style={{ borderRadius: 5, flex: 1, padding: "0.75em 1em" }}
        ></input>
        <button
          style={{
            marginLeft: 10,
            padding: "0.75em 2em",
          }}
        >
          Join now
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
