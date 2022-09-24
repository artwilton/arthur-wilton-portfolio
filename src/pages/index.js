import * as React from "react"
import Layout from "../components/layout"
import HomeLanding from "../components/home/homeLanding"
import { HomeWork } from "../components/home"

const HomePage = () => {
  return (
    <Layout>
      <HomeLanding/>
      <HomeWork/>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>