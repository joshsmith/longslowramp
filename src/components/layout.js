/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"

import Title from "./Title"
import "./layout.css"

const Layout = ({ children }) => (
  <Fragment>
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
      <p>Made with <span role="img" aria-label="heart">💙</span> em Portugal.</p>
    </div>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
