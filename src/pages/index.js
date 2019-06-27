import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import Newsletter from "../components/Newsletter"
import Podcasts from "../components/Podcasts"
import Products from "../components/Products"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Newsletter />
    <Podcasts />
    <Products />
    <Contact />
  </Layout>
)

export default IndexPage
