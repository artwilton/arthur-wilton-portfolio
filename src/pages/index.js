import Layout from "../components/layout"
import HomeLanding from "../components/home/homeLanding"
import { HomeFeatured, HomeWork, HomeAbout } from "../components/home"
import "../styles/home.scss"

const HomePage = () => {
  return (
    <Layout>
      <HomeLanding/>
      <HomeWork/>
      <HomeFeatured/>
      <HomeAbout/>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>