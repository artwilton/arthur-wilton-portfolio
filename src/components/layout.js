import * as React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import { GitHubIcon, LinkedInIcon, BehanceIcon } from '../images/social_media_icons'

const Layout = ({ pageTitle, children }) => {

  const socialMediaIcons = [
    {name: 'GitHub', link: 'https://www.github.com/artwilton', SVGComp: GitHubIcon},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/artwilton', SVGComp: LinkedInIcon},
    {name: 'Behance', link: 'https://www.behance.net/artwilton', SVGComp: BehanceIcon}]

  return (
    <div>
      <Navigation socialMediaIcons={socialMediaIcons}/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer socialMediaIcons={socialMediaIcons}/>
    </div>
  )
}

export default Layout;