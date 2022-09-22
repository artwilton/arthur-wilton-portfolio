import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout pageTitle={"About"}>
            <h1>About Page</h1>
        </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About</title>