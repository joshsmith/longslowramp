import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import Newsletter from "../components/Newsletter"
import Podcasts from "../components/Podcasts"
import Products from "../components/Products"
import Articles from "../components/Articles"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Long Slow Ramp" />
    <Intro />
    <Newsletter />
    <Podcasts />
    <Products />
    <Articles />
    <Contact />
  </Layout>
)

export default IndexPage
