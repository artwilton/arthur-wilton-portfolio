import * as React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import { GitHubIcon, LinkedInIcon, BehanceIcon } from '../media/social_media_icons'

const Layout = ({ children }) => {

  const socialMediaIcons = [
    {name: 'GitHub', link: 'https://www.github.com/artwilton', SVGComp: GitHubIcon},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/artwilton', SVGComp: LinkedInIcon},
    {name: 'Behance', link: 'https://www.behance.net/artwilton', SVGComp: BehanceIcon}]

  return (
    <>
      <Navigation socialMediaIcons={socialMediaIcons}/>
      <main>
        {children}
      </main>
      <Footer socialMediaIcons={socialMediaIcons}/>
    </>
  )
}

export default Layout;