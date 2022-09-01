import * as React from "react"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>Test</p>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>