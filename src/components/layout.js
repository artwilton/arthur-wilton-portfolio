import * as React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import { GitHubIcon, LinkedInIcon, BehanceIcon } from '../images/social_media_icons'

const Layout = ({ pageTitle, children }) => {

  const socialMediaIcons = [
    {name: 'GitHub', link: '', svgComponent: GitHubIcon},
    {name: 'LinkedIn', link: '', svgComponent: LinkedInIcon},
    {name: 'Behance', link: '', svgComponent: BehanceIcon}]

  return (
    <div>
      <Navigation/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer socialMediaIcons={socialMediaIcons}/>
    </div>
  )
}

export default Layout;