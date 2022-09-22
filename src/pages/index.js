import * as React from "react"
import Layout from "../components/layout"
import HomeLanding from "../components/home/homeLanding"

const HomePage = () => {
  return (
    <Layout>
      <HomeLanding/>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>