/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import Title from "./Title"
import "./layout.css"

const Layout = ({ children }) => (
  <Fragment>
    <Helmet>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </Helmet>
    <Title />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 700,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
    </div>
    <div style={{ marginTop: '2em', textAlign: "center" }}>
      <p>
        <a
          href="https://twitter.com/joshsmith"
          className="twitter-follow-button"
          data-size="large"
          data-show-count="false"
        >
          Follow @joshsmith
        </a>
      </p>
      <p>Made with <span role="img" aria-label="heart">💙</span> em Portugal.</p>
    </div>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
