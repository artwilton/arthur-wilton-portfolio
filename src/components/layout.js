import * as React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import { GitHubIcon, LinkedInIcon, BehanceIcon } from '../media/icons/social_media'
import { AWLogo } from "../media/icons/generic";
import "../styles/layout.scss"

const NAV_LINKS = [
  {name: 'Work', to: "/work"},
  {name: 'About', to: "/about"},
  {name: 'Blog', to: "https://artwilton.medium.com"},
  {name: 'Contact', to: "/contact"}
]

const NAVBAR_BRAND = {
  SVGComp: AWLogo,
  to: "/"
}

const SOCIAL_MEDIA_ICONS = [
  {name: 'GitHub', to: 'https://www.github.com/artwilton', SVGComp: GitHubIcon},
  {name: 'LinkedIn', to: 'https://www.linkedin.com/in/artwilton', SVGComp: LinkedInIcon},
  {name: 'Behance', to: 'https://www.behance.net/artwilton', SVGComp: BehanceIcon}]

const Layout = ({ children }) => {

  return (
    <>
      <Navigation navLinks={NAV_LINKS} navbarBrand={NAVBAR_BRAND} socialMediaIcons={SOCIAL_MEDIA_ICONS}/>
      <main>
        {children}
      </main>
      <Footer socialMediaIcons={SOCIAL_MEDIA_ICONS}/>
    </>
  )
}

export default Layout;